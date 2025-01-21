import { useEffect, useState } from "react"
import styles from "./edit.module.css"

const EditActivity = ({ isEditing = false, selectedActivity = null }) => {
  // State til at holde styr på inputfelternes værdier
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [successMessage, setSuccessMessage] = useState("")

  console.log(selectedActivity) // Debugging for at se den valgte aktivitet

  // Når komponenten renderes, og det er en redigering, sætter vi inputfelterne med de eksisterende data
  useEffect(() => {
    if (isEditing && selectedActivity) {
      setTitle(selectedActivity.title || "")
      setDate(selectedActivity.date || "")
      setTime(selectedActivity.time || "")
      setDescription(selectedActivity.description || "")
      setImage(selectedActivity.image || null)
    }
  }, [isEditing, selectedActivity])

  // Opdaterer billedets state, når brugeren vælger en fil
  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  // Håndterer formularens "submit"-handling
  const handleSubmit = async (e) => {
    e.preventDefault() // Forhindrer standard handling for formularen

    // Opretter et FormData-objekt til at håndtere tekst- og fildata
    const formData = new FormData()
    if (isEditing) {
      formData.append("_id", selectedActivity._id) // Tilføj ID'et, hvis vi redigerer
    }
    formData.append("title", title)
    formData.append("date", date)
    formData.append("time", time)
    formData.append("description", description)

    if (image) {
      formData.append("file", image) // Tilføj billede, hvis der er valgt et
    }

    // URL og metode afhænger af, om vi redigerer eller opretter en aktivitet
    const url = "http://localhost:3042/activity"
    const method = isEditing ? "PUT" : "POST"

    try {
      // Sender data til backend via fetch
      const response = await fetch(url, {
        method,
        body: formData,
      })
      console.log("FormData:", [...formData]);

      // Tjekker om requesten var succesfuld
      if (response.ok) {
        // Viser en succesmeddelelse til brugeren
        setSuccessMessage(
          isEditing
            ? "Aktiviteten blev opdateret med succes!"
            : "Aktiviteten blev tilføjet med succes!"
        )
        if (!isEditing) {
          // Nulstiller felterne, hvis vi tilføjer en ny aktivitet
          setTitle("")
          setDate("")
          setTime("")
          setDescription("")
          setImage(null)
        }
      } else {
        console.error("Server error:", response.status) // Logger fejl, hvis serveren returnerer en fejl
      }
    } catch (error) {
      console.error("Error submitting activity:", error) // Logger fejl ved fetch-anmodningen
    }
  }

  return (
    <div className={styles.editAktivitet}>
      {isEditing ? <h2>Opdater Aktivitet</h2> : <h2>Tilføj Aktivitet</h2>}

      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className={styles.editContent}>
        <div className={styles.editInput}>
          <p>Aktivitet</p>
          <input
            type='text'
            placeholder='Tilføj titel'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.editInput}>
          <p>Dag</p>
          <input
            type='text'
            placeholder='Tilføj dag'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className={styles.editInput}>
          <p>Tidspunkt</p>
          <input
            type='text'
            placeholder='Tilføj tidspunkt (Fra - til)'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className={styles.editInput}>
          <p>Beskrivelse</p>
          <textarea
            placeholder='Tilføj beskrivelse'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.editInput}>
          <p>Billede</p>
          <input
            className={styles.noFileChosen}
            type='file'
            onChange={handleImageChange}
          />
        </div>

        <button type='submit' className={styles.aktivitetButton}>
          {isEditing ? "Opdater Aktivitet" : "Tilføj Aktivitet"}
        </button>
      </form>
    </div>
  )
}

export default EditActivity