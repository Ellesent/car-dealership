using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;
using backend.Interfaces;


namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly ILogger<CarsController> _logger;
        private readonly ICarsProvider _provider;

        /// <summary>
        /// Cars Controller Constructor
        /// </summary>
        /// <param name="logger"></param>
        public CarsController(ICarsProvider provider, ILogger<CarsController> logger)
        {
            _logger = logger;
            _provider = provider;
        }


        [HttpGet]
        public List<CarModel> GetMatchingCars([FromQuery] CarFilterModel filters)
        {
            return _provider.GetCarsFromFilters(filters);
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
