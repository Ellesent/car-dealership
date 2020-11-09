import { Console, debug } from "console"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Dropdown } from "./dropdown"
import styles from '../styles/modules/filter-section.module.css'

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

interface CarFilters {
  [index: string]: any,
  color : string | null,
  sunRoof : boolean | null,
  fourWheelDrive : boolean | null
  lowMileage : boolean | null
  powerWindows: boolean | null
  navigation : boolean | null
  heatedSeats : boolean | null
}

export const FilterSection = (props: Props) => {
  // create the filter state objects - will be used to query data from the backend
  const [colorSelected, setColorSelected] = useState<string | null>(null);
  const [roofSelected, setRoofSelected] = useState<boolean | null>(null);
  const [driveSelected, setDriveSelected] = useState<boolean | null>(null);
  const [mileageSelected, setMileageSelected] = useState<boolean | null>(null);
  const [windowSelected, setWindowSelected] = useState<boolean | null>(null);
  const [navigationSelected, setNavigationSelected] = useState<boolean | null>(null);
  const [seatSelected, setSeatSelected] = useState<boolean | null>(null);


  // used to monitor filter changes and return the matching cars - calls the backend to fetch data
  // useEffect is only called when the variables passed in as the second argument are updated
  useEffect(() => {
    (async () => {
      // create model
      const filters : CarFilters = {color: colorSelected, sunRoof: roofSelected, fourWheelDrive: driveSelected, lowMileage: mileageSelected, powerWindows: windowSelected, navigation: navigationSelected, heatedSeats: seatSelected};

      // create query string
      const params = new URLSearchParams();

      for (const key in filters) {
        if (filters[key] != null) {
          console.log(`${key} ${filters[key]}`)
          params.append(key, (filters[key]));
        }
      }
      console.log(params);
      const response = await fetch("https://localhost:5001/api/cars?" + params);
      const cars: Car[] = await response.json();

      props.setCarList(cars);
     
    })();
  }, [colorSelected, roofSelected, driveSelected, mileageSelected, windowSelected, navigationSelected, seatSelected]);

  return (
    <div className={`is-flex is-flex-direction-column has-background-grey-lighter is-justify-content-space-evenly p-3 m-3`}>
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