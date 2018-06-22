using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SureTrader.Core.Contracts;
using SureTrader.Core.CustomModel;
using SureTrader.Core;

namespace SureTrader.Services
{
   public class EmployeeeRepo : IEmployeee
    {

        public List<Employeee> GetAllUser()
        {
            using (var context = new myconcontext())
            {

                return context.Employeees.ToList();

            }

        }

    }
}
