import React from "react";
import "./UserRev.css";
import {FaStar} from "react-icons/fa";
import { Paper } from "@mui/material";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

function UserRev() {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = value => {
        setHoverValue(undefined)
    }

    return (
        <div className="container">
            <h2> Star Ratings in React</h2>
            <div className="stars">
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="Any thoughts?"
                className="textarea"
            />
            <div><button>Submit</button></div>
        </div>
    );
};



export default UserRev;