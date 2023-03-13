import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Task } from '../../util/utils';
import "../styles/forms/taskForms.css"

type FormProps = {
  onSubmit: (task: Task) => void;
  deleteAllTasks: () => void;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function Form({ onSubmit, deleteAllTasks }: FormProps) {
  const [id, setId] = useState('');
  const [task, setTask] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [time, setTime] = useState('');
  const [taskEmpty, setTaskEmpty] = useState(false);
  const [timeEmpty, setTimeEmpty] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!task || !time) {
      setTaskEmpty(!task);
      setTimeEmpty(!time);
      return;
    }
    const newTask: Task = {
      id: uuid(),
      task,
      dayOfWeek,
      time,
    };
    onSubmit(newTask);
    setId('');
    setTask('');
    setDayOfWeek('Monday');
    setTime('');
  }

  return (

    <div className='container-form'>
      <form className='container-form-addCard' onSubmit={handleSubmit}>
        <div className='input-form'>
          <label >
            <input className={`task-or-inssue ${taskEmpty ? 'error' : ''}`} placeholder='Task or inssue' type="text" value={task} onChange={(event) => { setTask(event.target.value); setTaskEmpty(false); }} />
          </label>
          <label>
            <select className='select-day' value={dayOfWeek} onChange={(event) => setDayOfWeek(event.target.value)}>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input className={`time-input ${timeEmpty ? 'error' : ''}`} type="time" value={time} onChange={(event) => { setTime(event.target.value); setTimeEmpty(false); }} />
          </label>
        </div>
        <div className='buttons-form'>
          <button className='add' type="submit">+ Add to calendar</button>
          <button className='delete' type='button' onClick={deleteAllTasks}>- Delete All</button>
        </div>
      </form>
    </div>

  );
}
