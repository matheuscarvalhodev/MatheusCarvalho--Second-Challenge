import React, { useState, useEffect } from "react";
import DateTimeDisplay from "./dateTimeWidget";
import WeatherDisplay from "./weatherInfoWidget";
import "../styles/widgets/headerDashboardWidget.css"
import LogoutButton from "./logoutButtonWidget";

interface HeaderProps{
    city:string
    country:string
}

const Header: React.FC<HeaderProps>= ({city, country}) => {
    return (
        <header className="header">
            <div className="header-title">
                <h2>Weekly Planner</h2>
                <p>Use this planner to organize your daily issues.</p>
            </div>
            <DateTimeDisplay/>
            <WeatherDisplay city={city} country={country}/>
            <LogoutButton/>
        </header>);
};

export default Header;
