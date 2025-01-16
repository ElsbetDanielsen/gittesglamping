import Aktiviteter from "../components/Aktiviteter/Aktiviteter"
import PageHeader from "../components/PageHeader/PageHeader"
import PrøvOphold from "../components/PrøvOphold/PrøvOphold"
import image_04 from "/assets/img/image_04.jpg"

function ActivitiesPage() {

    return (
        <>
            <PageHeader title='Aktiviteter' img={image_04} />
            <PrøvOphold title='Ingen skal kede sig hos Gitte' text='Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker.' />
            <Aktiviteter />
        </>
    )
}

export default ActivitiesPage