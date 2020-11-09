import { Dispatch, SetStateAction, useState } from "react"

export interface props {
    stateDispatcher: Dispatch<SetStateAction<any>>
    dropDownObjectList: Object // expecting an object where the keys are the visual values of the drop down items, and values are the values set using the dispatcher when that dropdown item is selected
}

// dropdown component
export const Dropdown = (props: props) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);  // state variable used for toggling the dropdown open or closed 
    const [indexActive, setIndexActive] = useState(0);          // state variable for keeping track of the active dropdown element

    return (
        <div className={(isDropdownOpen ? "is-active" : "") +" dropdown"} onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{Object.keys(props.dropDownObjectList)[indexActive]}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {Object.keys(props.dropDownObjectList).map((dropdownName: string, index: number) => (
                        <a className={(index == indexActive ? "is-active" : "") + " dropdown-item"} key={dropdownName} onClick={(e) => {props.stateDispatcher(dropdownName in props.dropDownObjectList); setDropdownOpen(false); setIndexActive(index)}}>
                             {dropdownName}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}