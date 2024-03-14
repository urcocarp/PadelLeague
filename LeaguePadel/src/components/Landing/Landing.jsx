import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import style from './Landing.module.css'


const Landing=()=>{
    return (
        <div>

        <div className={style.card}>
            <div className={style.cardInfo} href={'/Home'}>
                <h2  ><span>P</span><span>adel</span></h2>
                <h2><span>L</span><span>eague</span></h2>
                <Link to="/Home">
                <button className={style.button}>
                    <span className={style.transition}></span>
                    <span className={style.gradiant}></span>
                    <span className={style.label}> PLAY</span>
                </button>
                </Link>
                <Link className={style.Qui}>Quienes somos?</Link>
                <h2><span>Torneo de padel|Liga de padel</span></h2>
            </div>
             

        </div>
      </div>
    )
}

export default Landing;