using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using backend.Controllers;
using backend.Models;
using System.IO;
using Newtonsoft.Json;
using System.Linq;
using backend.Helpers;
using backend.Interfaces;

namespace backend {
    public class CarsProvider : ICarsProvider {
        
        private List<CarModel> cars;
        private readonly ILogger<CarsController> _logger;

        public CarsProvider(ILogger<CarsController> logger) {
            cars = ReadJson();
            _logger = logger;

        }

        /// <summary>
        /// Read cars data from the json file - simulates database
        /// </summary>
        /// <returns>List of car data</returns>
        private List<CarModel> ReadJson()
        {
            using (StreamReader r = new StreamReader("data.json"))
            {
                string json = r.ReadToEnd();
                List<CarModel> cars = JsonConvert.DeserializeObject<List<CarModel>>(json);

                Console.WriteLine(string.Join(',', cars));
                return cars;
            }
        }

        public List<CarModel> GetCarsFromFilters(CarFilterModel filters) {
            List<CarModel> results = new List<CarModel>();
            
            // create query for cars. A null filter means do not filter for that field (return all for that field)
            IQueryable<CarModel> query = cars.AsQueryable()
            .WhereIf(!string.IsNullOrWhiteSpace(filters.Color), c => c.Color.ToUpper() == filters.Color.ToUpper())
            .WhereIf(filters.SunRoof != null, c => c.hasSunroof == filters.SunRoof)
            .WhereIf(filters.FourWheelDrive != null, c => c.isFourWheelDrive == filters.FourWheelDrive)
            .WhereIf(filters.LowMileage != null, c => c.hasLowMiles == filters.LowMileage)
            .WhereIf(filters.PowerWindows != null, c => c.hasPowerWindows == filters.PowerWindows)
            .WhereIf(filters.Navigation != null, c => c.hasNavigation == filters.Navigation)
            .WhereIf(filters.HeatedSeats != null, c => c.hasHeatedSeats == filters.HeatedSeats);

            results = query.ToList();
         
            return results;
        }
    }
}