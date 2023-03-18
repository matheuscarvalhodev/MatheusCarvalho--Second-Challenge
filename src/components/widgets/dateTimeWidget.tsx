import React, { useState, useEffect } from "react";
import { month } from "../../util/util";
import "../styles/widgets/dateTimeWidget.css"

const DateTimeDisplay: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hour = `${date.getHours()}:${date.getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false })}`;
    const formattedDate = `${month[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}`;

    return <div className="datetime">
        <h2>{hour}</h2>
        <p>{formattedDate}</p>
    </div>;
};

export default DateTimeDisplay;
