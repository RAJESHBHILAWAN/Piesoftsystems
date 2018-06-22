using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using System.Linq;
using SureTrader.Core.CustomModel;


namespace SureTrader.Core
{
  public  class myconcontext : DbContext
    {
        public myconcontext() : base("PaySlip")
        {

        }

        public DbSet<Employeee> Employeees { get; set; }

    }
}
