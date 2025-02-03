import styles from './akt.module.css'
import Aktivitet from './Aktivitet'

function Aktiviteter() {

    return (
        <div className={styles.aktContainer}>
            <Aktivitet />
        </div>
    )
}

export default Aktiviteter