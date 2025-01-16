import HomePageHeader from "../components/HomePageHeader/HomePageHeader"
import KomOgPrøv from "../components/KomOgPrøv/KomOgPrøv"
import Udtalelser from "../components/Udtalelser/Udtalelser"
import image_00 from "/assets/img/image_00.jpg"

function Home() {

    return (
        <>
            <HomePageHeader subtitle='Gittes' title='Glamping' img={image_00} />
            <KomOgPrøv />
            <Udtalelser />
        </>
    )
}

export default Home