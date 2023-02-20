import { useState } from 'react';
import { Form } from './taskForms';
import "../styles/weekDashboard.css"
import Card from './cards';

type Task = {
    task: string;
    dayOfWeek: string;
    time: string;
};

const daysOfWeek = [
    { name: 'Monday', color: '#FF0024' },
    { name: 'Tuesday', color: '#FF8000' },
    { name: 'Wednesday', color: '#FFCE00' },
    { name: 'Thursday', color: '#FF4D66' },
    { name: 'Friday', color: '#FFA74D' },
    { name: 'Saturday', color: '#FFDD4D' },
    { name: 'Sunday', color: '#FF7F91' },
];

export function WeekTabs() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedDay, setSelectedDay] = useState('Sunday');
    const [selectedDayColor, setSelectedDayColor] = useState('#FF7F91');

    function handleCreateTask(task: Task) {
        setTasks([...tasks, task]);
    }

    return (
        <div className='container'>
            <Form onSubmit={handleCreateTask} />
            <div className='container-tabs'>
                <div>
                </div>
                <div className="container-dash">
                    <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #ccc', gap: "3px", marginLeft:"10px" }}>
                        {daysOfWeek.map((day) => (
                            <button
                                key={day.name}
                                onClick={() => { setSelectedDay(day.name); setSelectedDayColor(day.color) }}
                                style={{
                                    backgroundColor: day.color,
                                    border: "none",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    borderTopLeftRadius: "9px",
                                    borderTopRightRadius: "9px",
                                    paddingLeft: "10px",
                                    height: "30px",
                                    fontSize: "18px",
                                    cursor: "pointer"
                                }}
                            >
                                {day.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='time'>time</div>
            <div>
                {tasks
                    .filter((task) => task.dayOfWeek === selectedDay)
                    .map((task) => (
                        <div className='cardTask'>
                            <div className='card' style={{
                                backgroundColor: selectedDayColor
                            }}>{task.time}</div>
                            <Card key={task.task} text={task.task} color={selectedDayColor} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
