import { useState, useEffect } from 'react';
import { Form } from '../forms/formTask';
import "../styles/widgets/weekDashboardWidget.css"
import CardTask from './cardsWidget';
import { DashboardProps, Task } from '../../util/interfaces';
import { Tasks } from '../../api/get/getTasks';
import Modal from '../modals/modal';
import { DeleteTask } from '../../api/delete/deleteTask';
import ModalConfirm from '../modals/confirmModal';
import { daysOfWeekObject } from '../../util/util';



export const WeekDashboard: React.FC<DashboardProps> = ({ token }) => {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [selectedDayColor, setSelectedDayColor] = useState('#FF0024');
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [tasksByTime, setTasksByTime] = useState<{ [key: string]: Task[] }>({});
    const [erroMessage, setErroMessage] = useState<string>('');
    const [verify, setVerify] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [atualizar, setAtualizar] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [idTask, setIdTask] = useState('');

    document.body.addEventListener("click", () => {
        if (showModal) {
            setShowModal(false);
        }
    });

    const aoAtualizar = () => {
        setAtualizar(true)
    }
    useEffect(() => {
        setShowLoadingModal(true);
        const api = async () => {
            try {
                const result = await Tasks(selectedDay,token);
                
                if (result.status == 200) {
                    const filteredTasks = result.data.filter((task: Task) => task.dayOfWeek === selectedDay);
                    const tasksByTime = filteredTasks.reduce((acc: { [key: string]: Task[] }, task: Task) => {
                        const tasksAtTime = acc[task.time] || [];
                        return { ...acc, [task.time]: [...tasksAtTime, task] };
                    }, {});

                    setTasksByTime(tasksByTime);
                    setVerify(false)
                } else {
                    setVerify(true)
                    setShowModal(true)
                    setErroMessage(result.data)
                }
            } catch (error: any) {
                setVerify(true);
                setShowModal(true)
                setErroMessage(error.message)
            } finally {
                setShowLoadingModal(false);
            }
        }

        api();
        if (atualizar) {
            api();
            setAtualizar(false);
        }
    }, [selectedDay, atualizar]);

    const confirmDelete = (flag:boolean) => {
        if(flag){
          deleteTask();
          setConfirm(false);
          setIdTask('');
        }else{
          setConfirm(false);
          setIdTask('');
        }
      }
    
      async function deleteTask(){
        try{
          const deleteTask = await DeleteTask(idTask,token);
          if(deleteTask.status == 204){
            aoAtualizar();
          }else {
            setErroMessage(`${deleteTask.data}`);
            setShowModal(true);
          }
        }catch (error: any) {
            setErroMessage(`${error.message}`);
          setShowModal(true);
        }
      }
    
      const flag = (id:string) => {
        setIdTask(id)
        setConfirm(true)
      }

    const sortedTasksByTime = Object.entries(tasksByTime).sort(([time1], [time2]) => time1.localeCompare(time2));

    return (
        <div className='container'>
            <ModalConfirm showConfirm={confirm} message={'Do you want to delete this task?'} onConfirm={confirmDelete} />
            <Form aoAtualizar={aoAtualizar} selectedDay={selectedDay} taskList={sortedTasksByTime} token={token}/>
            <div className='container-tabs'>
                <div className="container-dash">
                    <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #ccc', gap: "3px", marginLeft: "110px", marginRight: "15px", minWidth: "1100px", width: "100%" }}>
                        {daysOfWeekObject.map((day) => (
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
            <div className="dashboard" style={showLoadingModal ? { display: 'grid' } : {}}>
                {verify ? <Modal showModal={showModal} message={[erroMessage]} /> : <></>}
                {showLoadingModal ? (
                    <div style={{ placeSelf: 'center', marginTop: '30px' }}>
                        <svg className="circleSvg-weather" viewBox="0 0 50 50" style={{ width: '250px', height: '250px' }}>
                            <circle className="circle-weather"
                                cx="25"
                                cy="25"
                                r="20"
                            />
                        </svg>
                    </div>
                ) : <div className='dash-field'>
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
                                            <CardTask flag={flag} tarefa={task} key={task.id} text={task.task} color={cardColor} />
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                }
            </div>

        </div>
    );
}