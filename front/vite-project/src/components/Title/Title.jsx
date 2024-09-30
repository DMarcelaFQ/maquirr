import styles from "./Title.module.css"

const Title = () => {

    return(
        <div className={styles.container}>
        <h1 className={styles.mainTitle}>Maquirrú</h1>
        <h2 className={styles.mainSubtitle}>Hair Beauty</h2>
        </div>  
    )
}

export default Title