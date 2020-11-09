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

export const FilterSection = (props: Props) => {
  // create the filter state objects - will be used to query data from the backend
  const [colorSelected, setColorSelected] = useState("All Colors");
  const [roofSelected, setRoofSelected] = useState("All Roof Types");
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
    <div className="is-flex is-flex-direction-column has-background-grey-lighter p-3">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">Filter Section</h2>
      <Dropdown dropDownList={["All Colors", "Red", "White", "Gray", "Silver", "Black"]} stateDispatcher={setColorSelected} />
      <Dropdown dropDownList={["All Roof Types", "No Sun Roof", "Has Sun Roof"]} stateDispatcher={setRoofSelected} />
      <Dropdown dropDownList={["All Drive Types", "Not 4 Wheel Drive", "4 Wheel Drive"]} stateDispatcher={setDriveSelected} />
      <Dropdown dropDownList={["All Mileage Types", "Low Mileage", "High Mileage"]} stateDispatcher={setMileageSelected} />
      <Dropdown dropDownList={["All Window Types", "Power Windows", "Manual Windows"]} stateDispatcher={setWindowSelected} />
      <Dropdown dropDownList={["All Navigation Types", "Navigation Included", "Navigation Not Included"]} stateDispatcher={setNavigationSelected} />
      <Dropdown dropDownList={["All Seat Types", "Heated Seats", "Standard Seats"]} stateDispatcher={setSeatSelected} />

    </div>
  )
}