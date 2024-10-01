import styles from "./Login.Module.css"
import { useState } from "react"
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
            <h1 className={styles.title}>Iniciar sesión para reservar:</h1>
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
            />
            <label className={styles.formError}>{formik.errors.password ? formik.errors.password : null}</label>
            </div>
            <button className={styles.button} type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login