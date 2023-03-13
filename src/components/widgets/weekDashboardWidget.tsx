import { useState, useMemo, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { Form } from '../forms/formTask';
import "../styles/widgets/weekDashboardWidget.css"
import CardTask from './cardsWidget';
import { Task } from '../../util/utils';


const daysOfWeek = [{ name: 'Monday', color: '#FF0024' }, { name: 'Tuesday', color: '#FF8000' }, { name: 'Wednesday', color: '#FFCE00' }, { name: 'Thursday', color: '#FF4D66' }, { name: 'Friday', color: '#FFA74D' }, { name: 'Saturday', color: '#FFDD4D' }, { name: 'Sunday', color: '#FF7F91' },];

export function WeekDashboard() {

    const [tasks, setTasks] = useState<Task[]>([
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:11' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:11' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:11' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:11' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:11' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:12' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:13' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:14' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:15' },
        { id: uuid(), task: 'a', dayOfWeek: 'Monday', time: '11:16  ' },
        { id: uuid(), task: 'a', dayOfWeek: 'Tuesday', time: '11:16  ' },
    ]);
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [selectedDayColor, setSelectedDayColor] = useState('#FF0024');

    const deletarCard = useCallback((id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    }, [tasks]);


    function handleCreateTask(task: Task) {
        setTasks([...tasks, task]);
    }

    const tasksByTime = useMemo(() => tasks
        .filter((task: Task) => task.dayOfWeek === selectedDay)
        .reduce((acc: { [key: string]: Task[] }, task: Task) => {
            const tasksAtTime = acc[task.time] || [];
            return { ...acc, [task.time]: [...tasksAtTime, task] };
        }, {}), [tasks, selectedDay]);

    const deleteAllTasks = () => {
        setTasks(tasks.filter(task => task.dayOfWeek !== selectedDay));
    };

    const sortedTasksByTime = Object.entries(tasksByTime).sort(([time1], [time2]) => time1.localeCompare(time2));

    return (
        <div className='container'>
            <Form onSubmit={handleCreateTask} deleteAllTasks={deleteAllTasks} />
            <div className='container-tabs'>
                <div className="container-dash">
                    <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #ccc', gap: "3px", marginLeft: "110px", marginRight: "15px", minWidth: "1100px", width: "100%" }}>
                        {daysOfWeek.map((day) => (
                            <button
                                key={day.color}
                                onClick={() => { setSelectedDay(day.name); setSelectedDayColor(day.color); }}
                                style={{
                                    backgroundColor: day.color,
                                    border: 'none',
                                    width: '100%',
                                    display: "flex",
                                    flexDirection: "row",
                                    borderRadius: "9px 9px 0 0",
                                    paddingLeft: "10px",
                                    height: "30px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    ...(selectedDay === day.name && { width: '110%' }),
                                }}
                            >
                                {day.name}
                            </button>

                        ))}

                    </div>
                </div>
            </div>
            <div className="dashboard">
                <div className='dash-field'>
                    <div className="time-field">
                        <div className='time'>Time</div>
                        {
                            sortedTasksByTime.map(([time, tasksAtTime]) => {
                                const sameTime = tasksAtTime.length > 1;
                                const cardColor = sameTime ? '#00000070' : selectedDayColor;
                                return (
                                    <div key={time} className='card' style={{ backgroundColor: cardColor }}>{time}</div>
                                )
                            })
                        }
                    </div>
                    <div className="task-field-scroll" style={{ overflowX: 'auto', overflowY: 'hidden', width: '100%' }}>
                        <div className="task-field">
                            {sortedTasksByTime.map(([time, tasksAtTime]) => {
                                const sameTime = tasksAtTime.length > 1;
                                const cardColor = sameTime ? '#00000070' : selectedDayColor;
                                return (
                                    <div key={time} className="tasks-container">
                                        {sameTime && <div className='time-divider' style={{ height: '5px', minWidth: `${325 * tasksAtTime.length}px` }}></div>}
                                        {sameTime && <div className='time-divider-ball'></div>}
                                        {tasksAtTime.map((task) => (
                                            <CardTask aoDeletar={deletarCard} tarefa={task} key={task.id} text={task.task} color={cardColor} />
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}