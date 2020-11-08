import { useState } from "react"
import { Dropdown } from "./dropdown"

export const FilterSection = () => {
const [colorSelected, setColorSelected] = useState("All Colors");

  return (
    <div className="is-flex is-flex-direction-column has-background-grey-lighter p-3">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">Filter Section</h2>
      <Dropdown dropDownList={["All Colors", "Red", "White", "Gray", "Silver", "Black"]} stateDispatcher={setColorSelected}/>
      <Dropdown dropDownList={["All Roof Types", "No Sun Roof", "Has Sun Roof"]}/>
      <Dropdown dropDownList={["All Drive Types", "Not 4 Wheel Drive", "4 Wheel Drive"]}/>
      <Dropdown dropDownList={["All Mileage Types", "Low Mileage", "High Mileage"]}/>
      <Dropdown dropDownList={["All Window Types", "Power Windows", "Manual Windows"]}/>
      <Dropdown dropDownList={["All Navigation Types", "Navigation Included", "Navigation Not Included"]}/>
      <Dropdown dropDownList={["All Seat Types", "Heated Seats", "Standard Seats"]}/>

    </div>
  )
}