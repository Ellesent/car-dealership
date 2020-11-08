import { SetStateAction, useState } from "react"

export interface props {
    name: string,
    dropDownList: string[]
}

export const Dropdown = (props: props) => {
    
    // state variable used for toggling the dropdown open or closed 
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className={(isDropdownOpen ? "is-active" : "") +" dropdown"} onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{props.name}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {props.dropDownList.map((dropdownName: string, index: number) => (
                        <a className={(index == 0 ? "is-active" : "") + " dropdown-item"} key={dropdownName}>
                             {dropdownName}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}