import style from './NavBar.module.css'
import { IoSearchSharp } from "react-icons/io5";



const NavBar =()=>{
    return (

        <nav>

         <ul>
            <li>
                <a href="" className={style.link}>Inscripcion</a>
            </li>
            <li>
                <a href="/CrearTorneo" className={style.link}>Crear torneo</a>
            </li>
            <li>
                <a href="/" className={style.link}>Salir</a>
            </li>
         <div className={style.input}>
         <input type="text" placeholder='Buscar Jugador'/> <IoSearchSharp  className={style.icon}/>
         </div>
         
         </ul>
        </nav>
    )

}
export default NavBar;