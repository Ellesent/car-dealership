import { Dropdown } from "./dropdown"

export const FilterSection = () => {

  return (
    <div className="container">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">Filter Section</h2>
      <Dropdown name="All Colors" dropDownList={["All Colors", "Red", "White", "Gray", "Silver", "Black"]}/>
    </div>
  )
}