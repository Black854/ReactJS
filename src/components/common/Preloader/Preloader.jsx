import preloader from "../../../img/preloader.svg";
import s from './Preloader.module.css';

let Preloader = (props) => {
    return (<div className={s.preloaderBlock}>
                <img src={preloader} className={s.preloader} alt="" />
        </div>)
}

export default Preloader;