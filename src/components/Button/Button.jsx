import React from 'react';

const Button = ({ name, changeValue }) => {
  return (
    <button onClick={()=>changeValue(name)}>{name}</button> 
  );
};

export default Button;

