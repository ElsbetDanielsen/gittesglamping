import styles from './backoffice.module.css'
import BackofficeItems from './BackofficeItems'

function Backoffice() {

    return (
        <div className={styles.backofficeContainer}>
            <BackofficeItems />
        </div>
    )
}

export default Backoffice