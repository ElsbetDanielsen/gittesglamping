import styles from './akt.module.css'
import { icons } from "../../services/Icons"

function Aktivitet({ title, img, text, subtext }) {

    return (
        <div className={styles.aktContent}>
            <div className={styles.aktTitle}>
                <h3>{title}</h3>
            </div>
            <div className={styles.imgDiv}>
                <img src={img} />
            </div>
            <div className={styles.aktText}>
                <div className={styles.aktTextContent}>
                    <div className={styles.alleDage}>
                        <p>{text}</p>
                        <h4>{subtext}</h4>
                        </div>
                        <div className={styles.heartDiv}>
                        <div className={styles.heart}>
                            {icons['EmptyHeart']}
                        </div>
                        </div>
                </div>
                <div className={styles.læsMereButton}>
                    <div className={styles.linkBtn}>Læs mere {icons['ArrowDown']}</div>
                </div>
            </div>
        </div>
    )
}

export default Aktivitet