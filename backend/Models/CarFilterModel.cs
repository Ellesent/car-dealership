using System;
using System.Collections.Generic;

namespace backend.Models
{
    public class CarFilterModel {
        public string Color { get; set; }
        public bool? SunRoof { get; set; }
        public bool? FourWheelDrive { get; set; }
        public bool? LowMileage { get; set; }

        public bool? PowerWindows{ get; set; }
        public bool? Navigation { get; set; }
        public bool? HeatedSeats { get; set; }

    }
}