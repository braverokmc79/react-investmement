import React from 'react'
import classes from './Button.module.css'
interface ButtonProps{
    type?:'button' | 'submit' | 'reset';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}


const Button:React.FC<ButtonProps>= (props) => {
  return (
    <button 
        className={classes.button} 
        type={props.type || 'button' }
         onClick={props.onClick}>   
         {props.children} 
    </button>
  )
}

export default Button