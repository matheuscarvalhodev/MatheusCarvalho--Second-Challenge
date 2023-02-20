import { useState } from 'react';
import "../styles/inputHeader.css"

type Task = {
  task: string;
  dayOfWeek: string;
  time: string;
}

type FormProps = {
  onSubmit: (task: Task) => void;
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function Form({ onSubmit }: FormProps) {
  const [task, setTask] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: Task = {
      task,
      dayOfWeek,
      time,
    };
    onSubmit(newTask);
    setTask('');
    setDayOfWeek('');
    setTime('');
  }

  return (

      <div className='container-form'>
        <form className='container-form-addCard' onSubmit={handleSubmit}>
          <div className='input-form'>
            <label >
              <input className='task-or-inssue' placeholder='Task or inssue' type="text" value={task} onChange={(event) => setTask(event.target.value)} />
            </label>
            <label>
              <select className='select-day' value={dayOfWeek} onChange={(event) => setDayOfWeek(event.target.value)}>
                <option value=""></option>
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <input className='time-input' type="time" value={time} onChange={(event) => setTime(event.target.value)} />
            </label>
          </div>
          <div className='buttons-form'>
            <button className='add' type="submit">+ Add to calendar</button>
            <button className='delete'>- Delete All</button>
          </div>
        </form>
      </div>

  );
}
