import { Outlet } from "react-router-dom"
import PageHeader from "../../components/PageHeader/PageHeader"
import image_01 from "/assets/img/image_01.jpg"
import PrøvOphold from "../../components/PrøvOphold/PrøvOphold"
import StayPakker from "../../components/StayPakker/StayPakker"

function StayPage() {

    return (
        <>
            <PageHeader title='Vores ophold' img={image_01} />
            <PrøvOphold title='Vi har ophold til enhver smag' text='Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
                Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.' />
            <StayPakker />
            <Outlet />
        </>
    )
}

export default StayPage