import styles from './ophold.module.css'

function AStayContent() {

    return (
        <div className={styles.aStayContainer}>
            <div className={styles.aStayContent}>
                <div className={styles.aStayText}>
                    <h2>Tag væk en weekend, med én du holder af</h2>
                    <p>Trænger du og én du holder af til en velfortjent pause fra hverdagens travlhed? Vores weekendglampingophold er den perfekte måde at forynge krop og sind på, mens i nyder det bedste fra naturen og luksuriøs indkvartering. Vi tilbyder den perfekte kombination af udendørs eventyr og bekvemmeligheder. Du vil bo i rummelige og smukt indrettede telte, udstyret med komfortable senge og alle nødvendige faciliteter. Omgivet af den storslåede natur vil du føle dig i ét med omgivelserne, samtidig med at du nyder komforten ved hjemmet.</p>
                </div>

                <div className={styles.aStayBundle}>
                    <p>Morgenmad</p>
                    <p>Frokost</p>
                    <p>Aftensmad</p>
                    <p>Adgang til cykler</p>
                    <p>1 kanobillet</p>
                    <p>Optændingsbrikker til bål</p>
                    <p>Snobrødsdej</p>
                    <h3>Pris 4200,-</h3>
                </div>

                <button type="submit" className={styles.bookButton}>Book nu</button>
            </div>
        </div>
    )
}

export default AStayContent