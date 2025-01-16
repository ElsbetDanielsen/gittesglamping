import styles from './akt.module.css'
import Aktivitet from './Aktivitet'
import kano from "/assets/img/activities/kano.jpg"
import naturvandring from "/assets/img/activities/naturvandring.jpg"
import yoga from "/assets/img/activities/yoga.jpg"
import vinsmagning from "/assets/img/activities/vinsmagning.jpg"
import baal from "/assets/img/activities/baal.jpg"

function Aktiviteter() {

    return (
        <div className={styles.aktContainer}>
            <Aktivitet title='Kanotur' text='Alle dage' subtext='kl. 8.00 - 20.00' img={kano} />
            <Aktivitet title='Naturvandring' text='Lørdage' subtext='kl. 13.00 - 14.30' img={naturvandring} />
            <Aktivitet title='Yoga i det fri' text='Alle dage' subtext='kl. 13.00 - 14.30' img={yoga} />
            <Aktivitet title='Vinsmagning' text='Lørdage' subtext='kl. 15.00 - 17.00' img={vinsmagning} />
            <Aktivitet title='Fællesbål' text='Fredage og lørdage' subtext='kl. 15.00 - 17.00' img={baal} />
        </div>
    )
}

export default Aktiviteter