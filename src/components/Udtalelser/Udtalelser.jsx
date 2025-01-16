import styles from './udtalelser.module.css'

function Udtalelser() {

    return (
        <div className={styles.udtalelserContainer}>
            <div className={styles.udtalelserContent}>
                <h2>Vores gæster udtaler</h2>
                <div className={styles.udtalelserText}>
                    <h3>Line, 34 år</h3>
                    <h3>Har været på romantisk getaway</h3>
                    <p>Min kæreste og jeg fejrede vores årsdag med et ophold ved Gittes Glamping. Det vil vi helt sikkert gøre igen. personalet var virkelig søde og servicemindede, og maden og stemningen var i top.</p>
                </div>
                <div className={styles.udtalelserText}>
                    <h3>Johanne, 22 år</h3>
                    <h3>Har været på weekendtur</h3>
                    <p>Jeg blev inviteret med af min veninde. Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overraket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt.</p>
                </div>
                <div className={styles.udtalelserText}>
                    <h3>Benjamin, 42 år</h3>
                    <h3>Har været på Familiepakken</h3>
                    <p>Top karakter til Gittes Glamping herfra! Perfekt blanding af primitivt og luksuriøst. Og ungerne elskede det!</p>
                </div>
                <div className={styles.udtalelserText}>
                    <h3>Peter, 61 år</h3>
                    <h3>Har været på Weekendtur</h3>
                    <p>Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle.</p>
                </div>
            </div>
        </div>
    )
}

export default Udtalelser