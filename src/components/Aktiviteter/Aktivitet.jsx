import styles from './akt.module.css'
import { icons } from "../../services/Icons"
import { useMyList } from "../../context/myListContext"

function Aktivitet({ title, img, text, subtext }) {
  const { list, addToList, removeFromList } = useMyList()
  const isList = list.some((list) => list.title === title)

  const handleHeartClick = () => {
    const activity = { title, img, text, subtext }
    if (isList) {
      removeFromList(title)
    } else {
      addToList(activity)
    }
  }

  return (
    <div className={styles.aktContent}>
      <div className={styles.aktTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.imgDiv}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.aktText}>
        <div className={styles.aktTextContent}>
          <div className={styles.alleDage}>
            <p>{text}</p>
            <h4>{subtext}</h4>
          </div>
          <div className={styles.heartDiv}>
            <div
              className={`${styles.heart} ${isList ? styles.filledHeart : ""}`}
              onClick={handleHeartClick}
            >
              {isList ? icons['FullHeart'] : icons['EmptyHeart']}
            </div>
          </div>
        </div>
        <div className={styles.læsMereButton}>
          <div className={styles.linkBtn}>
            Læs mere {icons['ArrowDown']}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aktivitet
