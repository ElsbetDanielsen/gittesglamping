import KontaktGitte from "../components/KontaktGitte/KontaktGitte"
import PageHeader from "../components/PageHeader/PageHeader"
import image_03 from "/assets/img/image_03.jpg"

function ContactPage() {

    return (
        <>
           <PageHeader title='Kontakt Gitte' img={image_03} />
           <KontaktGitte />
        </>
    )
}

export default ContactPage