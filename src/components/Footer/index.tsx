import React from 'react'
import Button from '../Button'

import style from './style.module.css'


class Footer extends React.Component<any> {
  render() {
    return (
      <div className={style.ButtonsBlock}>
        <div className={style.Content}>
          <Button name="Реклама" />
          <Button name="Всё для бизнеса" />
          <Button name="Всё о Google" />
        </div>
        <div className={style.Content}>
          <Button name="Конфиденциальность" />
          <Button name="Условия" />
          <Button name="Настройки" />
        </div>
      </div>
    )
  }
}

export default Footer
