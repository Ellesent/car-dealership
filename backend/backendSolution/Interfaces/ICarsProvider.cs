using System.Collections.Generic;
using backend.Models;

namespace backend.Interfaces
{
    public interface ICarsProvider
    {
        List<CarModel> GetCarsFromFilters(CarFilterModel filters);
        
    }
}