import React from 'react';
import hotBg from '../assets/hot.jpeg';
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate()


    const enterKeyPressed = (e) => {
        if (e.keyCode === 13) {
            e.currentTarget.blur();
            navigate("./CityWeather", { state: { city: e.currentTarget.value } })
        }
    };

    return (
        <div className="app" style={{ backgroundImage: `url(${hotBg})` }}>
            <div className="overlay">
                {
                    <div className="container">
                        <div className="section section__inputs">
                            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..." />
                        </div>
                    </div>

                }
            </div>
        </div>
    );
}
export default Search;
