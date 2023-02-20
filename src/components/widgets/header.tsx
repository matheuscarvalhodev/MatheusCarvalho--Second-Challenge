import React, { useState, useEffect } from "react";
import DateTimeDisplay from "./dateTime";
import WeatherDisplay from "./weatherInfo";
import "../styles/header.css"
import LogoutButton from "./logoutButton";

const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="header-title">
                <h2>Weekly Planner</h2>
                <p>Use this planner to organize your daily issues.</p>
            </div>
            <DateTimeDisplay/>
            <WeatherDisplay/>
            <LogoutButton/>
        </header>);
};

export default Header;
