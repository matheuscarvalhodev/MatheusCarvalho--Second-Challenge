import React from 'react';
import { Task } from '../../util/utils';
import "../styles/widgets/cardWidget.css"

interface CardProps {
  tarefa: Task;
  color: string;
  text: string;
}

const CardTask: React.FC<CardProps> = ({ tarefa, color, text }) => {
  return (
    <div className='card-description' style={{ backgroundColor: 'rgba(255,255,255,0.36)', borderLeft: `15px solid ${color}` }}>
      <p>{text}</p>
      <button>Delete</button>
    </div>
  );
};

export default CardTask;