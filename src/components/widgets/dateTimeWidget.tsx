import React, { useState, useEffect } from "react";
import "../styles/widgets/dateTimeWidget.css"

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DateTimeDisplay: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hour = `${date.getHours()}:${date.getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false })}`;
    const formattedDate = `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}`;

    return <div className="datetime">
        <h2>{hour}</h2>
        <p>{formattedDate}</p>
    </div>;
};

export default DateTimeDisplay;
