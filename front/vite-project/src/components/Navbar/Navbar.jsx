import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';

const Navbar = () => {
    const navigate = useNavigate();
    const {logOutUser} = useContext(UsersContext)

    const handleLogOut = () => {
        logOutUser();
        Swal.fire({
            icon: "warning",
            title: "Cerraste sesión. Vuelve pronto!"
        });
        navigate("/");
    }

    return (
        <nav className={styles.navbar}>
            <span>
            <NavLink
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Inicio
            </NavLink>
            </span>
            <span>
            <NavLink
            to="/schedule" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Reservar cita
            </NavLink>
            </span>
            <span>
            <NavLink
            to="/myAppointments" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Mis Reservas
            </NavLink>
            </span>
            <span className={styles.link} onClick={handleLogOut}>
            Cerrar sesión
            </span>
    </nav>

    )
}

export default Navbar