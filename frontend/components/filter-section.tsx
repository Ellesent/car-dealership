import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Dropdown } from "./dropdown"

export interface Car {
  _id : string,
  make : string,
  year: number,
  color: string,
  price: number,
  hasSunroof: boolean, 
  isFourWheelDrive: boolean, 
  hasLowMiles: boolean, 
  hasPowerWindows: boolean, 
  hasNavigation: boolean, 
  hasHeatedSeats: boolean 
}

interface Props {
  setCarList: Dispatch<SetStateAction<Car[]>>
}

const roofTypes  = {
  "All Roof Types" : null,
  "No Sun Roof" : false,
  "Has Sun Roof" : true
}

const colors = {
  "All Colors" : null,
  "Red" : "Red",
  "White" : "White",
  "Gray" : "Gray",
  "Silver" : "Silver",
  "Black": "Black"
}


const driveTypes = {
  "All Drive Types" : null,
  "Not 4 Wheel Drive" : false,
  "4 Wheel Drive" : true
}

const mileageTypes = {
  "All Mileage Types" : null,
  "Low Mileage" : true,
  "High Mileage" : false
}

const windowTypes = {
  "All Window Types" : null,
  "Power Windows" : true,
  "Manual Windows" : false
}

const navigationTypes = {
  "All Navigation Types" : null,
  "Navigation Included" : true,
  "Navigation Not Included" : false
}

const seatTypes = {
  "All Seat Types" : null,
  "Heated Seats" : true,
  "Standard Seats" : false
}

export const FilterSection = (props: Props) => {
  // create the filter state objects - will be used to query data from the backend
  const [colorSelected, setColorSelected] = useState("All Colors");
  const [roofSelected, setRoofSelected] = useState<boolean | null>(null);
  const [driveSelected, setDriveSelected] = useState("All Drive Types");
  const [MileageSelected, setMileageSelected] = useState("All Mileage Types");
  const [windowSelected, setWindowSelected] = useState("All Window Types");
  const [navigationSelected, setNavigationSelected] = useState("All Navigation Types");
  const [seatSelected, setSeatSelected] = useState("All Seat Types");


  // used to monitor filter changes and return the matching cars - calls the backend to fetch data
  // useEffect is only called when the variables passed in as the second argument are updated
  useEffect(() => {
    (async () => {
      const response = await fetch("https://localhost:5001/api/cars");
      const cars: Car[] = await response.json();

      props.setCarList(cars);
      //const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
      //setUsers(users.data.results);
    })();
  }, []);

  return (
    <div className="is-flex is-flex-direction-column has-background-grey-lighter p-3 m-3">
      <h1 className="title">Search Filters</h1>
      <Dropdown stateDispatcher={setColorSelected} dropDownObjectList={colors} />
      <Dropdown stateDispatcher={setRoofSelected} dropDownObjectList={roofTypes} />
      <Dropdown stateDispatcher={setDriveSelected} dropDownObjectList={driveTypes} />
      <Dropdown stateDispatcher={setMileageSelected} dropDownObjectList={mileageTypes} />
      <Dropdown stateDispatcher={setWindowSelected} dropDownObjectList={windowTypes} />
      <Dropdown stateDispatcher={setNavigationSelected} dropDownObjectList={navigationTypes} />
      <Dropdown stateDispatcher={setSeatSelected} dropDownObjectList={seatTypes} />

    </div>
  )
}