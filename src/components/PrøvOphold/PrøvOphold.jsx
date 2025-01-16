import styles from './prøvOphold.module.css'

function PrøvOphold({title, text}) {

    return (
        <div className={styles.prøvOphold}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default PrøvOphold