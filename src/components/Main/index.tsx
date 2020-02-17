import React from 'react'
import Google from './google.png'
import Input from "./Input"
import Search from "./Search"
//import style from "./style.module.css"

class Main extends React.Component<any> {
  render() {
    return (
      <div>
        <img alt="google" src={Google} />
        <Input />
        <Search name="Поиск в Google"/>
        <Search name="Мне повезёт!"/>
      </div>
    )
  }
}

export default Main
