import styles from './stayPakker.module.css'
import StayPakke from "./StayPakke"

function StayPakker() {

    return (
        <div className={styles.stayPakkerContainer}>
            <StayPakke />
        </div>
    )
}

export default StayPakker