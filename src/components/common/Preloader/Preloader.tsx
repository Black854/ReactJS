import preloader from "../../../img/preloader.svg"
import s from './Preloader.module.css'
import React from 'react'

type PropsType = {

}

let Preloader: React .FC<PropsType> = (props) => {
    return (<div className={s.preloaderBlock}>
                <img src={preloader} className={s.preloader} alt="" />
        </div>)
}

export default Preloader