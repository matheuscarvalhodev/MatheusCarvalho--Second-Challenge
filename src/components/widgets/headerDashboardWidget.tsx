import React, { useState, useEffect } from "react";
import DateTimeDisplay from "./dateTimeWidget";
import WeatherDisplay from "./weatherInfoWidget";
import "../styles/widgets/headerDashboardWidget.css"
import LogoutButton from "./logoutButtonWidget";

interface HeaderProps{
    user:string
}

const Header: React.FC<HeaderProps>= ({user}) => {

    return (
        <header className="header">
            <div className="header-title">
                <h2>Weekly Planner</h2>
                <p>Use this planner to organize your daily issues.</p>
            </div>
            <DateTimeDisplay/>
            <WeatherDisplay user={user}/>
            <LogoutButton user={user}/>
        </header>);
};

export default Header;
