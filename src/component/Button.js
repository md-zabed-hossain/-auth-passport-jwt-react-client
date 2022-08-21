import React from 'react';
import "../App.css";

const Button = ({type,onClick,text,className}) => {
  return (
    <button className={className} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button