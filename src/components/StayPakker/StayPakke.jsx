import { Link } from "react-router-dom"
import styles from './stayPakker.module.css'

function StayPakke({ title, text, subtext, img }) {

    return (
        <div className={styles.stayPakkerContent}>
            <div className={styles.stayPakkerText}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{subtext}</p>
            </div>
            <div className={styles.imgDiv}>
                <img src={img} />
            </div>
            <div className={styles.læsMereButton}>
                <Link to='/stay/:id' className={styles.linkBtn}>Læs mere</Link>
            </div>
        </div>
    )
}

export default StayPakke