import styles from "./Login.Module.css"
import { useFormik } from "formik"
import { validateFields } from "../../helpers/validations"

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: validateFields,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
    <div className={styles.container}>
        <div className={styles.titleContainer}> 
            <h1 className={styles.title}>Inicia sesión para reservar:</h1>
        </div>
        <form className={styles.formContainer}>
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
            }>Login</button>
        </form>
    </div>
    )
}

export default Login