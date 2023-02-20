import React from 'react';
import "../styles/card.css"

interface CardProps {
  color: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ color, text }) => {
  return (
    <div className='card-description' style={{ backgroundColor: color }}>
      <p>{text}</p>
    </div>
  );
};

export default Card;