import React from 'react'
import style from "./style.module.css"
import IconSearch from "./search.png"
import IconKeyboard from "./keyboard.png"
import IconVoicesearch from "./voicesearch.png"

interface State {
  valueOfInput: string
}

const paterns = /[^a-zA-Zа-яА-ЯёЁ $]/;

class Input extends React.Component<{},State> {
  state = {
    valueOfInput: '',
  }

  render() {
    return (
      <>
        <div className={style.BlockInput}>
          <button className={style.ButtonIcon}>
            <img alt="icon" src={IconSearch}></img>
          </button>
          <input className={style.TextInput} type="text" value={this.state.valueOfInput}
          onChange={e => this.setState({ valueOfInput: paterns.test(e.target.value) ? this.state.valueOfInput : e.target.value })}>
          </input>
              <button className={style.ButtonIcon}>
              <img alt="icon" src={IconKeyboard}></img>
            </button>
            <button className={style.ButtonIcon}>
              <img alt="icon" src={IconVoicesearch}></img>
            </button>
        </div>
      </>
    )
  }
}
export default Input



// const Input: React.FC = () => {
//   const [valueOfInput, setValueofInput] = React.useState('')
//   return <>
//     <div className={style.BlockInput}>
//       <button className={style.ButtonIcon}>
//         <img alt="icon" src={IconSearch}></img>
//       </button>
//       <input className={style.TextInput} type='text' pattern='/[^a-zA-Zа-яА-ЯёЁ $]/' 
//         value={valueOfInput}
//         onChange={e => {
//           e.target.value.replace("/[^a-zA-Zа-яА-ЯёЁ $]", '') ? setValueofInput(e.target.value) : setValueofInput('')
//         }}
//         >
//       </input>
//       <button className={style.ButtonIcon}>
//         <img alt="icon" src={IconKeyboard}></img>
//       </button>
//       <button className={style.ButtonIcon}>
//         <img alt="icon" src={IconVoicesearch}></img>
//       </button>
//     </div>
//   </>
// }

//export default Input