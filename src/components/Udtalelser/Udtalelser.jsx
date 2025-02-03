import { useFetchReviews } from '../../hooks/useFetchReviews'
import styles from './udtalelser.module.css'

function Udtalelser() {
    const { reviews } = useFetchReviews()

    return (
        <div className={styles.udtalelserContainer}>
            <div className={styles.udtalelser}>
                <h2>Vores gæster udtaler</h2>
                <div className={styles.udtalelserContent}>
                {reviews.map(re => 
                    <div key={re._id} className={styles.udtalelserColumns}>
                        <div className={styles.udtalelserText}>
                            <h3>{re.name}, {re.age} år</h3>
                            <h3>Har været på {re.stay}</h3>
                            <p>{re.review}</p>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Udtalelser