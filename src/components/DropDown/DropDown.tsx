import React, { useRef, useState } from 'react';
import { Filter, Genres, Movies } from '../../Types/Types';
import './DropDown.scss';

interface DropDownProps {
    classTag: string;
    title: string;
    array: Genres[];
    fnSetter: React.Dispatch<React.SetStateAction<Filter>>;
    stateObj: Filter;
    stateValue: string;
    all: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ classTag, title, array, fnSetter, stateObj, stateValue, all }) => {

    const dropdownMenu = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    const openDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
        setOpen(!open)
    };

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        let newStateObj: Filter = { ...stateObj };

        (newStateObj[stateValue] as string | null) = (e.target as HTMLElement).getAttribute("data-id");
		
		fnSetter(newStateObj);
		setOpen(!open);
		if (dropdownMenu.current) {
			dropdownMenu.current.innerHTML = (e.target as HTMLElement).innerText;
		}
	};    

    return (
        <div
            className={`dropdown__container ${classTag}`}
            tabIndex={0}
            onBlur={() => setOpen(false)}
        >
            <div
                ref={dropdownMenu}
                className={`dropdown__menu ${open ? "active" : ""}`}
                onClick={openDropdown}
            >
                {title}  
            </div>
            {open && (
                <ul className="dropdown__content">
                    {all && (
                        <li data-id="" onClick={handleClick}>
                            Tous
                        </li>
                    )}
                    {array.map(({ name, id }, index) => (
                        <li key={index} data-id={id} onClick={handleClick}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
	);
};

export default DropDown;
// test git branch dev