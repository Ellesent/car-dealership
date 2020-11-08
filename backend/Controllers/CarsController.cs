using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;
using Newtonsoft.Json;
using System.IO;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private List<CarModel> cars;
        private readonly ILogger<CarsController> _logger;

        /// <summary>
        /// Cars Controller Constructor
        /// </summary>
        /// <param name="logger"></param>
        public CarsController(ILogger<CarsController> logger)
        {
            _logger = logger;
            cars = ReadJson();
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

        [HttpGet]
        public string GetMatchingCars(CarFilterModel filters)
        {

            return "";
        }

        // [HttpGet]
        // public IEnumerable<WeatherForecast> Get()
        // {
        //     var rng = new Random();
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         Date = DateTime.Now.AddDays(index),
        //         TemperatureC = rng.Next(-20, 55),
        //         Summary = Summaries[rng.Next(Summaries.Length)]
        //     })
        //     .ToArray();
        // }
    }
}
