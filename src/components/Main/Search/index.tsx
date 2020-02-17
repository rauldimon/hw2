import React from 'react'
import style from './style.module.css'

interface OwnProps {
    name: string
}

const Search: React.FC<OwnProps> = (props) => {
    return (
        <button className={style.ButtonSearch}>{props.name}</button>
    )
}
export default Search






