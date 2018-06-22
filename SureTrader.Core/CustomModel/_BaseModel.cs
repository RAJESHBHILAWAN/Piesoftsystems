using System;

namespace SureTrader.Core.CustomModel
{
    public class BaseModel
	{
		public DateTime? CreatedDate { get; set; }
		public DateTime? UpdatedDate { get; set; }
		public int? CreatedBy { get; set; }
		public int? UpdatedBy { get; set; }

		public int TotalForms { get; set; }
		public decimal FormCompleted { get; set; }
        public string Other_STATE { get; set; }

        public int? PageIdCorporate { get; set; }
        public int? idCUSTOMERCorporate { get; set; }
        public int? AccountHolderIdCorporate { get; set; }
        public string AccountStatusCorporate { get; set; }
        public string DirectorNameBycustomer { get; set; }
        public string DirectorType { get; set; }
        public string CustomerStatus { get; set; }

    }
}
