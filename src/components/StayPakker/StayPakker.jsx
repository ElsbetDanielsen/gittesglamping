import { Link } from "react-router-dom"
import styles from './stayPakker.module.css'
import weekend from "/assets/img/stays/weekend.jpg"
import familiepakken from "/assets/img/stays/familiepakken.jpg"
import tentlights from "/assets/img/stays/tentlights.jpg"
import StayPakke from "./StayPakke"

function StayPakker() {

    return (
        <div className={styles.stayPakkerContainer}>
            <StayPakke title='Weekendtur' text='2 personer' subtext='Fra 4200,-' img={weekend} />
            <StayPakke title='Familiepakken' text='3-6 personer' subtext='Fra 6100,-' img={familiepakken} />
            <StayPakke title='Romantisk Getaway' text='2 personer' subtext='Fra 3500,-' img={tentlights} />
        </div>
    )
}

export default StayPakker