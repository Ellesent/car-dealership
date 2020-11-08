namespace backend.Models
{
    public class CarModel {
        public string _id { get; set; }
        public string make { get; set; }
        public int year { get; set; }
        public string Color { get; set; }
         public int price { get; set; }
         public bool hasSunroof { get; set; }
         public bool isFourWheelDrive { get; set; }
         public bool hasLowMiles { get; set; }
         public bool hasPowerWindows { get; set; }
         public bool hasNavigation { get; set; }
         public bool hasHeatedSeats { get; set; }

    }
}