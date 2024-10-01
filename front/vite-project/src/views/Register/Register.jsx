import { useFormik } from "formik"
import { validateRegisterFields } from "../../helpers/validations"
import styles from "./Register.module.css"

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: "",            
            birthdate: "",       
            phone: "",           
            email: "",           
            password: ""         
        },
        validate: validateRegisterFields, 
        onSubmit: (values) => {
            console.log(values); 
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Regístrate para reservar:</h1>
            </div>
            <form className={styles.formContainer}>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Nombre:</strong></label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="name"
                        placeholder="Juan Pérez"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    <label className={styles.formError}>
                        {formik.errors.name ? formik.errors.name : null}
                    </label>
                </div>
    
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Fecha de Nacimiento:</strong></label>
                    <input
                        className={styles.formInput}
                        type="date"
                        name="birthdate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birthdate}
                    />
                    <label className={styles.formError}>
                        {formik.errors.birthdate ? formik.errors.birthdate : null}
                    </label>
                </div>
    
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Teléfono:</strong></label>
                    <input
                        className={styles.formInput}
                        type="String"
                        name="phone"
                        placeholder="1234567890"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    <label className={styles.formError}>
                        {formik.errors.phone ? formik.errors.phone : null}
                    </label>
                </div>
    
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Email:</strong></label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="email"
                        placeholder="example@mail.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label className={styles.formError}>
                        {formik.errors.email ? formik.errors.email : null}
                    </label>
                </div>
    
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Contraseña:</strong></label>
                    <input
                        className={styles.formInput}
                        type="password"
                        name="password"
                        placeholder="******"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <label className={styles.formError}>
                        {formik.errors.password ? formik.errors.password : null}
                    </label>
                </div>
    
                <button
                    className={styles.button}
                    type="submit"
                    disabled={
                        Object.keys(formik.errors).length > 0 ||
                        !formik.values.email ||
                        !formik.values.password ||
                        !formik.values.name ||
                        !formik.values.birthdate ||
                        !formik.values.phone
                    }
                >
                    Regístrate
                </button>
            </form>
        </div>
    );

}

export default Register;