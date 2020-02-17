import React from 'react'
import style from './style.module.css'
import Button from '../Button'
import Menu from "./Menu"

const Header:React.FC = () => {
    return <>
      <div className={style.ButtonsBlock}>
        <Button name="Аккаунт" />
        <Menu/>
        <Button name="Картинки" />
        <Button name="Почта" />
      </div>
    </>
  }

export default Header
