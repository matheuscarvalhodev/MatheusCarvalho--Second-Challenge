import React, { useState } from 'react';
import { DeleteTask } from '../../api/deleteTask';
import { Task } from '../../util/utils';
import ModalConfirm from '../modals/confirmModal';
import Modal from '../modals/modal';
import "../styles/widgets/cardWidget.css"

interface CardProps {
  flag: (id:string) => void;
  tarefa: Task;
  color: string;
  text: string;
}

const CardTask: React.FC<CardProps> = ({ tarefa, color, text,flag }) => {
    
  return (
    <>
    <div className='card-description' style={{ backgroundColor: 'rgba(255,255,255,0.36)', borderLeft: `15px solid ${color}` }}>
      <p>{text}</p>
      <button onClick={() => flag(tarefa.id)}>Delete</button>
    </div>
    </>
  );
};

export default CardTask;