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
            // TODO return 400 response
            if (filters == null)
            {
                return new List<CarModel>();
            }

            try
            {
                return _provider.GetCarsFromFilters(filters);
            }
            catch (Exception e)
            {
                // TODO return 500 with error message
                _logger.LogError("Error encountered when filtering for cars. Error is " + e.Message);
                return new List<CarModel>();
            }
        }
    }
}
