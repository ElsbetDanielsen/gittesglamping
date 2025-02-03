import { useState } from "react"
import { useFetchActivities } from "../../hooks/useFetchActivities"
import styles from "./backoffice.module.css"
import Logout from "../../components/Logout/Logout"
import EditActivity from "./EditActivities/EditActivity"
import { Link } from "react-router-dom"

function BackofficeItems() {
  const [activeComponent, setActiveComponent] = useState(null) // State for at styre, hvilket komponent der vises (alle aktiviteter, redigeringsformular, etc.)
  const [selectedActivity, setSelectedActivity] = useState(null) // State for at holde styr på den valgte aktivitet, der skal redigeres
  const { activities } = useFetchActivities() // Henter aktiviteter via custom hook

  // Funktion til at slette en aktivitet (DELETE)
  const handleDeleteActivity = async (activity) => {
    try {
      // Sender en DELETE-request til backend med aktivitetens ID
      const response = await fetch(
        `http://localhost:3042/activity/${activity._id}`,
        {
          method: "DELETE",
        }
      )
      // Hvis requesten lykkes, nulstilles den valgte aktivitet, og vi går tilbage til "alle aktiviteter"
      if (response.ok) {
        setSelectedActivity(null)
        setActiveComponent("activities")
      }
    } catch (error) {
      // Logger fejl, hvis der opstår en fejl under sletning
      console.error("Error deleting activity:", error)
    }
  }

  // Komponent til knapper i toppen (under Velkommen til backoffice)
  const EditButtons = () => (
    <div className={styles.editButtons}>
      <Link
        /* onClick={() => setActiveComponent(null)} */
        to="/"
        className={styles.editBtn}>
        Tilbage til frontend
      </Link>
      <button
        onClick={() => setActiveComponent("activities")}
        className={styles.editBtn}>
        Alle aktiviteter
      </button>
    </div>
  )

  // Funktion til at rendere det aktive komponent baseret på "activeComponent" state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "edit": // Redigeringsvisning med den valgte aktivitet
        return (
          <EditActivity isEditing={true} selectedActivity={selectedActivity} />
        )
      case "add": // Visning til at tilføje en ny aktivitet
        return <EditActivity />
      case "activities": // Liste over alle aktiviteter
        return (
          <ul className={styles.editActivities}>
            {activities?.map((act) => (
              <li key={act._id} className={styles.editActivity}>
                <p>{act.title}</p>
                <button
                  onClick={() => {
                    setSelectedActivity(act)
                    setActiveComponent("edit")
                  }}
                  className={styles.actButtons}>
                  Rediger aktivitet
                </button>
                <button
                  onClick={() => handleDeleteActivity(act)}
                  className={styles.actButtons}>
                  Slet aktivitet
                </button>
              </li>
            ))}
            <button
              onClick={() => setActiveComponent("add")}
              className={styles.editButton}>
              Tilføj en aktivitet
            </button>
          </ul>
        )
      default:
        return null // Hvis ingen komponent er valgt, vises der ingenting
    }
  }

  return (
    <div className={styles.backItemsContainer}>
      <h1>Velkommen til backoffice</h1>
      <EditButtons />
      <div className={styles.activeComponentContainer}>
        {renderActiveComponent()}
      </div>
      <Logout />
    </div>
  )
}

export default BackofficeItems