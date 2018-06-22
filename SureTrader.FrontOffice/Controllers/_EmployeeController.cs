using SureTrader.Core.Contracts;
using SureTrader.Core.CustomModel;
using SureTrader.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SureTrader.FrontOffice.Controllers
{
    public class EmployeeeController : ApiController
    {

        [HttpGet]
        public List<Employeee> GetInfo(int value1, int value2)
        {
            List<Employeee> lst;
            IEmployeee EmployeeRepo = new EmployeeeRepo();
             lst= EmployeeRepo.GetAllUser();
            var cnt = lst.Count();
            return lst;
        }

         

    }
}
