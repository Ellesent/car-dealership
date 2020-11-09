using NUnit.Framework;
using backend.Controllers;
using Moq;
using Microsoft.Extensions.Logging;
using backend.Interfaces;
using backend.Models;
using System.Collections.Generic;
using backend;

namespace Tests
{
    [TestFixture]
    public class CarsControllerUnitTests
    {
        CarsController carsController;
        Mock<ILogger<CarsController>> _logger = new Mock<ILogger<CarsController>>();
        ICarsProvider _provider;

        [SetUp]
        public void Setup()
        {
            _provider = new CarsProvider(_logger.Object);
            carsController = new CarsController(_provider, _logger.Object);

        }

        [Test]
        public void Get_RETURNOK_EMPTYFILTERS()
        {
            CarFilterModel filters = new CarFilterModel();
            
            List<CarModel> result = carsController.GetMatchingCars(filters);

            Assert.IsNotNull(result);
            Assert.IsNotEmpty(result);
        }

        [Test]
        public void Get_RETURNOK_WITHFILTERS()
        {
            CarFilterModel filters = new CarFilterModel()
            {
                Color = "Red",
                FourWheelDrive = false,
                HeatedSeats = true
            };

            List<CarModel> result = carsController.GetMatchingCars(filters);

            Assert.IsNotNull(result);
            Assert.IsNotEmpty(result);

            result.ForEach(x => Assert.IsTrue(x.color == filters.Color));
            result.ForEach(x => Assert.IsTrue(x.isFourWheelDrive == filters.FourWheelDrive));
            result.ForEach(x => Assert.IsTrue(x.hasHeatedSeats == filters.HeatedSeats));

        }

        [Test]
        public void Get_RETURNEMPTYLIST_NULLFILTERS()
        {
            CarFilterModel filters = null;

            List<CarModel> result = carsController.GetMatchingCars(filters);

            Assert.IsNotNull(result);
            Assert.IsEmpty(result);

        }
    }
}