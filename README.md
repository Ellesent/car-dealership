# car-dealership

## Project Description
This project consists of two parts: a backend and frontend. 

The backend is written with C# .NET Core 3.1 and contains the API used for parsing car data from a json file. This json file is a temporary file that replaces building out an actual database.

The frontend is written with Next.js - React. 


## Running the Backend
Please run the backend using a command line, such as Powershell. Ensure .NET Core 3.1 is installed.
Note: The frontend expects the project to run HTTPS on port 5001. This is the default when running in the command line.

1. navigate to the backend\backendSolution folder
      - `cd backend\backendSolution`
2. perform a dotnet restore
      - `dotnet restore`
3. run the application
      - `dotnet run`
      
The project should now be running and listening on http://localhost:5000 and https://localhost:5001

### backend API Notes

The backend consists of one API: https://localhost:5001/api/cars
Filters can also be passed in, for example: https://localhost:5001/api/cars?color=gray&fourwheeldrive=true&lowmileage=false
