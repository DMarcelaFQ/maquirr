import styles from "./Login.Module.css"
import { useFormik } from "formik"
import { validateFields } from "../../helpers/validations"
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UsersContext } from "../../context/UsersContext"

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(UsersContext)

    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: validateFields,
        onSubmit: async (values) => {
            try {
                await loginUser(values)
                Swal.fire({
                    title: "¡Bienvenid@!",
                    icon: "success",
                });              
                navigate("/");
            } catch {
                Swal.fire({
                    icon: "error",
                    title: "Usuario o contraseña incorrectos",
                    text: "Intentelo nuevamente",
                });           
            };
        },
    
    })

    return (
    <div className={styles.container}>
        <div className={styles.titleContainer}> 
            <h1 className={styles.title}>Inicia sesión para reservar:</h1>
        </div>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <div className={styles.formDiv}>
            <label className={styles.formLabel}><strong>Email:</strong></label>
            <input className={styles.formInput}
                type="text"
                name="email"
                placeholder = "example@mail.com"
                onChange={ formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <label className={styles.formError}>{formik.errors.email ? formik.errors.email : null}</label>
            </div>
            <div className={styles.formDiv}>
            <label className={styles.formLabel}><strong>Contraseña:</strong></label>
            <input className={styles.formInput}
                type="password"
                name="password"
                placeholder = "******"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <label className={styles.formError}>{formik.errors.password ? formik.errors.password : null}</label>
            </div>
            <button 
            className={styles.button} 
            type="submit"
            disabled= {Object.keys(formik.errors).length > 0 
            || !formik.values.email
            || !formik.values.password
            }>Login
            </button>
        </form>
        <div className={styles.containerP}>
            <p className={styles.paragraph}>Aún no tienes una cuenta?
            <Link to="/register" className={styles.link}>Regístrate!</Link>
            </p>
            <Link to="/" className={styles.link}>Volver al inicio</Link>
        </div>
    </div>
    )
}

export default Login