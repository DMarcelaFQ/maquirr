import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
       
         <a href='' className={styles.link}>Inicio</a>
         <a href='' className={styles.link}>Mis reservas</a>
         <a href='' className={styles.link}>Acerca de nosotros</a>
     
    </nav>

    )
}

export default Navbar