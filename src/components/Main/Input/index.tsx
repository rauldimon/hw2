import React from 'react'
import style from "./style.module.css"
import IconSearch from "./search.png"
import IconKeyboard from "./keyboard.png"
import IconVoicesearch from "./voicesearch.png"

interface State {
  valueOfInput: string
}

// class Input extends React.Component<any> {
//   state = {
//     valueOfInput: '',
//   }

//   render() {
//     return (
//       <>
//         <input className={style.TextInput} type="text" value={this.state.valueOfInput}
//         onChange={e => this.setState({ valueOfInput: e.target.value.replace("D [^0-9]", '') })}>}
//         </input>
//       </>
//     )
//   }
// }
// export default Input



const Input: React.FC = () => {
  const [valueOfInput, setValueofInput] = React.useState('')
  return <>
    <div className={style.BlockInput}>
      <button className={style.ButtonIcon}>
        <img alt="icon" src={IconSearch}></img>
      </button>
      <input className={style.TextInput} type='text' pattern='\D [^0-9]' 
        value={valueOfInput}
        onChange={e => {
          e.target.value.replace("D [^0-9]", '') ? setValueofInput(e.target.value) : setValueofInput('')
        }}
        >
      </input>
      <button className={style.ButtonIcon}>
        <img alt="icon" src={IconKeyboard}></img>
      </button>
      <button className={style.ButtonIcon}>
        <img alt="icon" src={IconVoicesearch}></img>
      </button>
    </div>
  </>
}

export default Input