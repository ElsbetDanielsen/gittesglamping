import { Link } from "react-router-dom"
import styles from './stayPakker.module.css'
import { useFetchStays } from "../../hooks/useFetchStays"

function StayPakke({ title, numberOfPersons, price, image }) {
    const { stays } = useFetchStays()

    return (
        <div className={styles.stayPakkerContent}>
            <div className={styles.stays}>
                {stays.map(st =>
                <div className={styles.stay}>
                    <div key={st._id} className={styles.stayPakkerText}>
                        <h2>{st.title}</h2>
                        <p>{st.numberOfPersons} personer</p>
                        <p>Fra {st.price},-</p>
                    </div>
                    <div className={styles.imgDiv}>
                        <img src={st.image} />
                    </div>
                    <div className={styles.læsMereButton}>
                        <Link to='/stay/:id' className={styles.linkBtn}>Læs mere</Link>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default StayPakke