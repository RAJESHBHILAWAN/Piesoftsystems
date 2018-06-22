using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;

namespace SureTrader.FrontOffice.Helper
{

    public class EmailAdditionalInfo
    {
        public string PinCode { get; set; }
        public string BalanceTransactionAmount { get; set; }
        public ArrayList DocumentList { get; set; }
        public string Comments { get; set; }

        public string Password { get; set; }
        public string verifytoken { get; set; }
    }
    public class EmailServiceForPayment
    {
        static String api_url = System.Configuration.ConfigurationManager.AppSettings["GetResponse_ApiURL"].ToString();
        static String api_key = System.Configuration.ConfigurationManager.AppSettings["GetResponse_ApiKey"].ToString();

        protected static int _requestNumber = 0;

        public EmailServiceForPayment()
        {
            _requestNumber = 1;
        }
        public enum EmailKeyName
        {
            RequestNewWithdrawlRequest = 1,
            NewPinGenerated = 2,
            WithdrawlRequestApproved = 3,
            WithdrawlRequestProcessed = 4,
            WithdrawlRejected = 5,
            WithdrawlCompleted = 6,
            ApplicationSubmiited = 7,
            ResetPassword = 8,
            SuretraderSignup = 9,

        }


        /*
			1. Request a Withdrawl Pin Email ---> withdrawal_pin_request
			2. New Withdrawl Request Submitted ---> withdrawal_request_submitted
			3. Withdrawl Request Approved ---> withdrawal_request_approved
			4. Withdrawl Request Processed. --> withdrawal_request_processed
			5. Withdrawl Rejected ---> withdrawal_request_rejected
			6. Withdrawl Completed. ---> withdrawal_request_completed
            7. Forgot password. --->   reset_password_bo
		 */
        public static void SendEmailNotification(string emailTo, EmailKeyName emailKeyName, string UserName,
            EmailAdditionalInfo emailAdditionalInfo)
        {
            var campaignName = string.Empty;
            var customData = new Dictionary<string, string>();
            _requestNumber = 1;

            //---------------------------------------------------------------------
            if (ConfigurationManager.AppSettings["SendEmail"] != null)
            {
                if (ConfigurationManager.AppSettings["SendEmail"].ToString() == "0")
                {
                    return;
                }
            }
            //---------------------------------------------------------------------

            switch (emailKeyName)
            {
                case EmailKeyName.RequestNewWithdrawlRequest:
                    campaignName = "withdrawal_request_submitted";
                    break;
                case EmailKeyName.NewPinGenerated:
                    if (string.IsNullOrEmpty(emailAdditionalInfo.PinCode))
                    {
                        throw new Exception("pincode is required");
                    }
                    customData["pincode"] = emailAdditionalInfo.PinCode;
                    campaignName = "withdrawal_pin_request";

                    break;
                case EmailKeyName.WithdrawlRequestApproved:

                    if (string.IsNullOrEmpty(emailAdditionalInfo.BalanceTransactionAmount))
                    {
                        throw new Exception("Transaction Amount is required");
                    }
                    customData["amount"] = emailAdditionalInfo.BalanceTransactionAmount;


                    campaignName = "withdrawal_request_approved";
                    break;
                case EmailKeyName.WithdrawlRequestProcessed:
                    campaignName = "withdrawal_request_processed";
                    break;
                case EmailKeyName.WithdrawlRejected:
                    customData["comment"] = emailAdditionalInfo.Comments;
                    campaignName = "withdrawal_request_rejected";
                    break;

                case EmailKeyName.WithdrawlCompleted:
                    campaignName = "withdrawal_request_completed";
                    break;


                case EmailKeyName.ApplicationSubmiited:
                    campaignName = "application_submiited_bo";

                    customData["firstname"] = UserName;
                    customData["username"] = emailTo;
                    customData["password"] = emailAdditionalInfo.Password;
                    customData["verifytoken"] = emailAdditionalInfo.verifytoken;
                    break;
                case EmailKeyName.ResetPassword:
                    campaignName = "reset_password_bo";

                    customData["username"] = emailTo;
                    customData["password"] = emailAdditionalInfo.Password;

                    break;
                case EmailKeyName.SuretraderSignup:
                    campaignName = "suretrader_signup";
                    customData["username"] = emailTo;
                    customData["password"] = emailAdditionalInfo.Password;
                    customData["firstname"] = UserName;
                    break;


            }

            //Step 1: Getting the Template  
            var campaignId = GetCampaignID(campaignName);

            //Step 2: Getting the Contact ID in the Campaign
            var contactId = GetContactID(campaignName, emailTo);

            //Step 3: Getting the Template Number
            if (!string.IsNullOrEmpty(contactId))
            {
                DeleteContact(contactId);
            }
            //Step 4: Getting the Template Number
            AddContact(campaignId, UserName, emailTo, customData, emailAdditionalInfo.DocumentList);

        }

        #region Campaign Data
        public static string GetCampaignID(string campaignName)
        {
            var campaignId = string.Empty;
            var isValidRequest = true;
            var jss = new JavaScriptSerializer();

            // get CAMPAIGN_ID of 'sample_marketing' campaign

            // new request object
            var _request = new Hashtable();

            _request["jsonrpc"] = "2.0";
            _requestNumber = _requestNumber + 1;
            _request["id"] = _requestNumber;

            // set method name
            _request["method"] = "get_campaigns";

            // set conditions
            var operator_obj = new Hashtable();
            operator_obj["EQUALS"] = campaignName;

            var name_obj = new Hashtable();
            name_obj["name"] = operator_obj;

            // set params request object
            object[] params_array = { api_key, name_obj };

            _request["params"] = params_array;

            // send headers and content in one request
            // (disable 100 Continue behavior)
            ServicePointManager.Expect100Continue = false;

            // initialize client
            var request = (HttpWebRequest) WebRequest.Create(api_url);
            request.Method = "POST";

            var request_bytes = Encoding.UTF8.GetBytes(jss.Serialize(_request));

            String response_string = null;

            try
            {
                // call method 'get_messages' and get result
                var request_stream = request.GetRequestStream();
                request_stream.Write(request_bytes, 0, request_bytes.Length);
                request_stream.Close();

                var response = (HttpWebResponse) request.GetResponse();
                var response_stream = response.GetResponseStream();

                var reader = new StreamReader(response_stream);
                response_string = reader.ReadToEnd();
                reader.Close();

                response_stream.Close();
                response.Close();

                // decode response to Json object
                var jsonContent = jss.DeserializeObject(response_string) as Dictionary<string, object>;

                if (jsonContent.ContainsKey("error"))
                {
                    //error
                    isValidRequest = false;
                }
                if (jsonContent.ContainsKey("result"))
                {
                    isValidRequest = true;
                    // get result
                    var result = jsonContent["result"] as Dictionary<string, object>;

                    // get campaign id
                    foreach (object key in result.Keys)
                    {
                        campaignId = key.ToString();
                    }
                }

            }
            catch (Exception e)
            {
                //check for communication and response errors
                //implement handling if needed
                isValidRequest = false;
            }
            return campaignId;
        }


        private static string GetContactID(string campaignName, string email)
        {
            var contactId = "0";

            var jss = new JavaScriptSerializer();

            var _request = new Hashtable();
            _request["jsonrpc"] = "2.0";
            _request["id"] = _requestNumber + 1;

            // set method name
            _request["method"] = "get_contacts";

            var contactParams = new Hashtable();


            var operator_obj = new Hashtable();
            //replace with Equals if contains does not work
            operator_obj["EQUALS"] = campaignName;
            // operator_obj["CONTAINS"] = campaign_name + "%";

            var campaignNameObj = new Hashtable();
            campaignNameObj["name"] = operator_obj;
            contactParams["get_campaigns"] = campaignNameObj;

            var email_operator_obj = new Hashtable();
            email_operator_obj["EQUALS"] = email;
            contactParams["email"] = email_operator_obj;
            object[] contact_params_array = { api_key, contactParams };
            _request["params"] = contact_params_array;

            // send headers and content in one request
            // (disable 100 Continue behavior)
            ServicePointManager.Expect100Continue = false;
            // initialize client
            var request = (HttpWebRequest) WebRequest.Create(api_url);
            request.Method = "POST";
            var request_bytes = Encoding.UTF8.GetBytes(jss.Serialize(_request));
            string response_string = null;

            try
            {
                // call method 'get_messages' and get result
                var request_stream = request.GetRequestStream();
                request_stream.Write(request_bytes, 0, request_bytes.Length);
                request_stream.Close();

                var response = (HttpWebResponse) request.GetResponse();
                var response_stream = response.GetResponseStream();

                var reader = new StreamReader(response_stream);
                response_string = reader.ReadToEnd();
                reader.Close();

                response_stream.Close();
                response.Close();

                // decode response to Json object
                var jsonContent = jss.DeserializeObject(response_string) as Dictionary<string, object>;

                if (jsonContent.ContainsKey("error"))
                {
                    //error
                    contactId = "0";
                }
                if (jsonContent.ContainsKey("result"))
                {

                    var result = jsonContent["result"] as Dictionary<string, object>;
                    foreach (var key in result.Keys)
                    {
                        contactId = key;
                    }
                }
            }
            catch (Exception e)
            {
            }

            return contactId;
        }



        private static bool DeleteContact(string contactId)
        {
            var jss = new JavaScriptSerializer();
            var isMoved = true;
            var _request = new Hashtable();

            _request["jsonrpc"] = "2.0";
            _requestNumber = _requestNumber + 1;
            _request["id"] = _requestNumber;

            // set method name
            _request["method"] = "delete_contact";

            // set conditions


            var move_contact_obj = new Hashtable();
            move_contact_obj["contact"] = contactId;

            // set params request object
            object[] move_params_array = { api_key, move_contact_obj };

            _request["params"] = move_params_array;

            // send headers and content in one request
            // (disable 100 Continue behavior)
            System.Net.ServicePointManager.Expect100Continue = false;

            // initialize client
            var request = (HttpWebRequest) WebRequest.Create(api_url);
            request.Method = "POST";

            var request_bytes = Encoding.UTF8.GetBytes(jss.Serialize(_request));

            string response_string = null;

            try
            {
                // call method 'get_messages' and get result
                var request_stream = request.GetRequestStream();
                request_stream.Write(request_bytes, 0, request_bytes.Length);
                request_stream.Close();

                var response = (HttpWebResponse) request.GetResponse();
                var response_stream = response.GetResponseStream();

                var reader = new StreamReader(response_stream);
                response_string = reader.ReadToEnd();
                reader.Close();

                response_stream.Close();
                response.Close();

                var jsonContent = jss.DeserializeObject(response_string) as Dictionary<string, object>;
                if (jsonContent.ContainsKey("error"))
                {
                    isMoved = false;
                }
                if (jsonContent.ContainsKey("result"))
                {
                    isMoved = true;
                }
            }
            catch (Exception e)
            {
                isMoved = false;
            }

            return isMoved;
        }
        #endregion




        private static bool AddContact(string campaignId, string name, string email, Dictionary<string, string> customData, ArrayList documentList = null)
        {
            var isAdded = true;
            var jss = new JavaScriptSerializer();
            var _request = new Hashtable();

            _request["jsonrpc"] = "2.0";
            _requestNumber = _requestNumber + 1;
            _request["id"] = _requestNumber;
            _request["method"] = "add_contact";

            var contactParams = new Hashtable();
            contactParams["campaign"] = campaignId;
            contactParams["name"] = name;
            contactParams["email"] = email;
            contactParams["cycle_day"] = "0";


            var customsArray = new List<object>();

            if (customData.Count > 0)
            {
                foreach (var item in customData)
                {
                    var customItem = new Hashtable();
                    customItem["name"] = item.Key;
                    customItem["content"] = item.Value;
                    customsArray.Add(customItem);

                }

            }
            if (documentList != null && documentList.Count > 0)
            {
                for (int i = 0; i < documentList.Count; i++)
                {
                    var custom = new Hashtable();
                    custom["name"] = "missing_document_" + i.ToString();
                    custom["content"] = "<li> " + documentList[i] + " </li>";
                    customsArray.Add(custom);
                }
            }

            if (customsArray.Count > 0)
                contactParams["customs"] = customsArray;

            // set params request object
            object[] add_contact_params_array = { api_key, contactParams };

            _request["params"] = add_contact_params_array;

            // send headers and content in one request
            // (disable 100 Continue behavior)
            System.Net.ServicePointManager.Expect100Continue = false;

            // initialize client
            var request = (HttpWebRequest) WebRequest.Create(api_url);
            request.Method = "POST";

            var request_bytes = Encoding.UTF8.GetBytes(jss.Serialize(_request));

            string responseString = null;

            try
            {
                // call method 'add_contact' and get result
                var requestStream = request.GetRequestStream();
                requestStream.Write(request_bytes, 0, request_bytes.Length);
                requestStream.Close();

                var response = (HttpWebResponse) request.GetResponse();
                var responseStream = response.GetResponseStream();

                var reader = new StreamReader(responseStream);
                responseString = reader.ReadToEnd();
                reader.Close();

                responseStream.Close();
                response.Close();

                // decode response to Json object
                var jsonContent = jss.DeserializeObject(responseString) as Dictionary<string, object>;

                if (jsonContent.ContainsKey("error"))
                {
                    isAdded = false;
                }
                if (jsonContent.ContainsKey("result"))
                {
                    isAdded = true;
                }
            }
            catch (Exception e)
            {
                //check for communication and response errors
                //implement handling if needed
                isAdded = false;
            }

            return isAdded;

        }




    }
}