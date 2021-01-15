import React from "react";
import "./personDetails.css";

export default ({ person }) => {
    // Get the gender
    let gender = "Unknown"
    switch (person.gender) {
        case 0:
            gender = "Unknown";
            break;
        case 1:
            gender = "Female";
            break;
        case 2:
            gender = "Male";
            break;
        case 3:
            gender = "Non-Binary";
            break;
        default:
            break;
    }
    return (
        <>
                <ul className="list-group list-group-horizontal">
                    <li key="pkfh" className="list-group-item list-group-item-dark">
                        Known for
                </li>
                    <li key="pkfd" className="list-group-item ">
                        {person.known_for_department}
                    </li>
                    <li key="pbh" className="list-group-item list-group-item-dark">
                        Birthday
                </li>
                    <li key="pbd" className="list-group-item ">
                        {person.birthday}
                    </li>
                    <li key="pgh" className="list-group-item list-group-item-dark">
                        Gender
                </li>
                    <li key="pgd" className="list-group-item ">
                        {gender}
                    </li>
                    <li key="ppbh" className="list-group-item list-group-item-dark">
                        Place of Birth
                </li>
                    <li key="ppbd" className="list-group-item ">
                        {person.place_of_birth}
                    </li>
                    {person.deathday ? (
                        <>
                            <li key="pddh" className="list-group-item list-group-item-dark">
                                Day of Death
                    </li>
                            <li key="pddh" className="list-group-item ">
                                {person.deathday}
                            </li>
                        </>
                    ) : (<></>)
                    }
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li key="ruh" className="list-group-item list-group-item-dark">
                        Biography
                </li>
                    <li key="rut" className="list-group-item ">
                        {person.biography}
                    </li>
                </ul>
        </>

    );
};