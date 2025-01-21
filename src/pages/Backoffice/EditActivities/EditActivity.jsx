import { useEffect, useState } from "react"
import { useFetchActivities } from "../../../hooks/useFetch"
import styles from "./edit.module.css"

const EditActivity = ({ isEditing = false, selectedActivity = null }) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [successMessage, setSuccessMessage] = useState("")
  const { activities, fetchActivityById } = useFetchActivities()

  console.log(selectedActivity)

  useEffect(() => {
    if (isEditing && selectedActivity) {
      setTitle(selectedActivity.title || "")
      setDate(selectedActivity.date || "")
      setTime(selectedActivity.time || "")
      setDescription(selectedActivity.description || "")
      setImage(selectedActivity.image || null)
    }
  }, [isEditing, selectedActivity])

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    if (isEditing) {
      formData.append("_id", selectedActivity._id)
    }
    formData.append("title", title)
    formData.append("date", date)
    formData.append("time", time)
    formData.append("description", description)

    if (image) {
      formData.append("file", image)
    }

    const url = "http://localhost:3042/activity"
    const method = isEditing ? "PUT" : "POST"

    try {
      const response = await fetch(url, {
        method,
        body: formData,
      })

      if (response.ok) {
        setSuccessMessage(
          isEditing
            ? "Aktiviteten blev opdateret med succes!"
            : "Aktiviteten blev tilføjet med succes!"
        )
        if (!isEditing) {
          setTitle("")
          setDate("")
          setTime("")
          setDescription("")
          setImage(null)
        }
      } else {
        console.error("Server error:", response.status)
      }
    } catch (error) {
      console.error("Error submitting activity:", error)
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