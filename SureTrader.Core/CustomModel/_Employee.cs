using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SureTrader.Core.CustomModel
{
  public  class Employeee
    {
        public int EmployeeeID { get; set; }



        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }


        [Required]
        [Display(Name = "Annual Salary")]
        public decimal AnnualSalary { get; set; }

        [Required]
        [Display(Name = "Super Rate")]
        public int SuperRate { get; set; }

        [Required]
        [Display(Name = "Payment Start Date")]
        public DateTime PaymentStartDate { get; set; }







    }
}
