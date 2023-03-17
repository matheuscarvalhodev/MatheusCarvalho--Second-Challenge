import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { createTask } from '../../api/postCreateTask';
import { Task } from '../../util/utils';
import Modal from '../modals/modal';
import "../styles/forms/taskForms.css"

type FormProps = {
  aoAtualizar: () => void;
  deleteAllTasks: () => void;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function Form({aoAtualizar, deleteAllTasks }: FormProps) {
  const [task, setTask] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [time, setTime] = useState('');
  const [taskEmpty, setTaskEmpty] = useState(false);
  const [timeEmpty, setTimeEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<string[]>([]);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  document.body.addEventListener("click", () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!task || !time) {
      setTaskEmpty(!task);
      setTimeEmpty(!time);
      return;
    }

    setShowLoadingModal(true);
    try {
      const newUser = await createTask(task, dayOfWeek, time);
      if (newUser.status === 201) {
        aoAtualizar();
        setShowLoadingModal(false);
      }
      else {
        setModalMessage([`${newUser.data}`]);
        setShowModal(true);
        console.log(newUser)
      }
    } catch (error: any) {
      setModalMessage([`${error.message}`]);
      setShowModal(true);
      console.log(error.message)
    }

    setTask('');
    setDayOfWeek('Monday');
    setTime('');
  }

  return (
    <div className='container-form'>
      <Modal showModal={showModal} message={modalMessage} />
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
          {showLoadingModal ? (
            <div style={{display:'flex',gap:'5px',textAlign:'center',alignItems:'center', fontSize:'12px'}}>
              Enviando...
              <svg className="circleSvg-weather" viewBox="0 0 50 50" style={{ width: '30px', height: '30px' }}>
                <circle className="circle-weather"
                  cx="25"
                  cy="25"
                  r="20"
                />
              </svg>
            </div>
          ) : <></>}
        </div>
        <div className='buttons-form'>
          <button className='add' type="submit">+ Add to calendar</button>
          <button className='delete' type='button' onClick={deleteAllTasks}>- Delete All</button>
        </div>
      </form>
    </div>

  );
}
