import React from 'react'
import Photo from "./menu.png"
import style from './style.module.css'
import SearchGoogle from "./googlesearch.png"
import Account from "./account.png"
import Calendar from "./calendar.png"
import Contacts from "./contacts.png"
import Drive from "./drive.png"
import Gmail from "./gmail.png"
import Maps from "./map.png"
import News from "./news.png"
import PhotoGoogle from "./photo.png"
import Play from "./play.png"
import Translate from "./translate.png"
import Youtube from "./youtube.png"



const Menu: React.FC = () => {
    const [isShowed, setIsShowed] = React.useState(false)
    return  <div className={style.MenuBlock}>
                <button className={style.ButtonMenu} onClick={() => setIsShowed(!isShowed)}>
                    <img alt="iconmenu" src={Photo}/>
                </button>
                {isShowed && (
                    <>
                    <div className={style.OpenMenu}>
                        <button className={style.InstrGoogle}><img alt="icon" src={SearchGoogle}></img>Поиск</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Account}></img>Аккаунт</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Maps}></img>Карты</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Youtube}></img>Youtube</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Play}></img>Play</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={News}></img>Новости</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Gmail}></img>Почта</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Contacts}></img>Контакты</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Drive}></img>Диск</button> 
                        <button className={style.InstrGoogle}><img alt="icon" src={Calendar}></img>Календарь</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={Translate}></img>Переводчик</button>
                        <button className={style.InstrGoogle}><img alt="icon" src={PhotoGoogle}></img>Фото</button>                       
                    </div>
                    </>
                )} 
        </div>
}

export default Menu