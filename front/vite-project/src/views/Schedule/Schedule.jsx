import { useFormik } from "formik"
import { validateAppointmentSchedule } from "../../helpers/validations"
import styles from "./Schedule.module.css"

const Schedule = () => {

    const formik = useFormik({
        initialValues: {
            date: "", 
            time: ""  
        },
        validate: validateAppointmentSchedule, 
        onSubmit: (values) => {
            console.log(values); 
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Reserva una Cita:</h1>
            </div>
            <form className={styles.formContainer}>
                <p className={styles.paragraph}>Horario de atencion: Lunes a Viernes de 2:00pm a 8:00pm - Sábados de 8:00am 12:00 m y de 2:00pm a 6:00pm </p>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Día:</strong></label>
                    <input
                        className={styles.formInput}
                        type="date"
                        name="date"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    <label className={styles.formError}>
                        {formik.touched.date && formik.errors.date ? formik.errors.date : null}
                    </label>
                </div>
    
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}><strong>Hora:</strong></label>
                    <input
                        className={styles.formInput}
                        type="time"
                        name="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                    />
                    <label className={styles.formError}>
                        {formik.touched.time && formik.errors.time ? formik.errors.time : null}
                    </label>
                </div>
    
                <button
                    className={styles.button}
                    type="submit"
                    disabled={
                        Object.keys(formik.errors).length > 0 ||
                        !formik.values.date ||
                        !formik.values.time
                    }
                >
                    Reserva
                </button>
            </form>
        </div>
    );

}

export default Schedule;