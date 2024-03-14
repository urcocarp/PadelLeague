import style from "./Home.module.css"
import NavBar from "../navBar/NavBar";


const Home =()=>{
    return (
    <>
     <div className={style.home}>
       <NavBar/>
        <h1>Home</h1>
     </div>
    </>
    )
       
    
};

export default Home;