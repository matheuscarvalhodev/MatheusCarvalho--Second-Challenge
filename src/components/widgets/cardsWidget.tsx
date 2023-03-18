import React from 'react';
import { CardProps } from '../../util/interfaces';
import "../styles/widgets/cardWidget.css"


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