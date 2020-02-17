import React from 'react';
import style from './style.module.css'

interface OwnProps {
    name: string
}

const Button: React.FC<OwnProps> = (props) => {
  return (
      <button className={style.Button}>{props.name}</button>
  )
}

export default Button