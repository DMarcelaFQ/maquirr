import { Link } from "react-router-dom";
import Title from "../../components/Title/Title"
import styles from "./Home.module.css";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const Home = () => {
    const { user } = useContext(UsersContext)

    return (
        <>
            {user ? (
            <>
            <div className={styles.titleContainer}>
            <Title />
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>Gracias por escogernos!</h1>
            <p className={styles.paragraph}><Link to="/schedule" className={styles.link}>Reserva una cita</Link>
            o también puedes<Link to="/myAppointments" className={styles.link}>Gestionar tus reservas</Link>
            </p>
            </div>
            </>
            ): (  
            <div className={styles.container}>
                <h1 className={styles.title}>Reserva una cita con nosotros!</h1>
                <p className={styles.paragraph}><Link to="/login" className={styles.link}>Inicia sesión</Link>
                para reservar o<Link to="/register" className={styles.link}>Regístrate</Link>
                si aún no tienes una cuenta</p>
            </div>                             
            )} 
        </>
    )
}

export default Home; 