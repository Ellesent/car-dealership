# car-dealership

## Project Description
This project consists of two parts: a backend and frontend. 

The backend is written with C# .NET Core 3.1 and contains the API used for parsing car data from a json file. This json file is a temporary file that replaces building out an actual database.

The frontend is written with Next.js - React and Typescript. Bulma, a CSS framework, is used to style the page. 



## Running the Backend
Please run the backend using a command line, such as Powershell. Ensure .NET Core 3.1 is installed.
Note: The frontend expects the project to run HTTPS on port 5001. This is the default when running in the command line.

1. navigate to the backend\backendSolution folder
      - `cd .\backend\backendSolution`
2. perform a dotnet restore to download any necessary nuget packages
      - `dotnet restore`
3. run the application
      - `dotnet run`
      
The project should now be running and listening on http://localhost:5000 and https://localhost:5001

### backend API Notes

The backend consists of one API: https://localhost:5001/api/cars
Filters can also be passed in, for example: https://localhost:5001/api/cars?color=gray&fourwheeldrive=true&lowmileage=false



## Running the Frontend
Before running, ensure the backend code is up and running.Also make sure Node.js version 11.6.0 or above is installed.
Please run the frontend using a command line, such as Powershell.

1. navigate to the frontend folder
      - `cd .\frontend\`
2. perform an npm install to download and necessary npm packages
      - `npm i`
3. run the application
      - `npm run dev`

The project should now be running and listening on http://localhost:3000
Navigating to the URL in a browser should load the frontend correctly, with both filters and car information showing.

## Running Unit Tests
### Backend Unit Tests
The backend uses NUnit as the testing framework.

1. navigate to the backend\tests folder
      - `cd .\backend\tests`
2. perform a dotnet restore to download any necessary nuget packages
      - `dotnet restore`
3. run the tests
      - `dotnet test`
### Frontend Unit Tests
The frontend uses Jest as the testing framework.

1. navigate to the frontend folder
      - `cd .\frontend\`
2. perform a npm install to download and necessary npm packages (can skip if down previously to run the frontend)
      - `npm i` 
3. run the tests
      - `npm run test`


### Closing Notes
## Why This Architecture?
The architecture I chose is a single-page web app that relies on a REST API for gathering the necessary data during the application's lifecycle. The reason for having two separate projects is to decouple responsibilities between them. This conforms to a more modern micro-service based architecture, and is more similar to the type of modern applications seen today. 

## Additions That Would Improve the Project
- Add real relational database vs. parsing from a JSON file for data
- Add more unit tests to frontend to simulate more user-interactions
- Add more unit tests to backend to test helper methods such as the ReadJSON method.
- consider adding integration tests to both backend and frontend
- Make the frontend look nicer using flex/Bulma
- For the backend API, implement a way to pass back HTTP codes so that error codes and messages could be passed back depending on the outcome of the API
