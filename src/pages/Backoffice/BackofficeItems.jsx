import { useState } from "react"
import { useFetchActivities } from "../../hooks/useFetch"
import styles from "./backoffice.module.css"
import Logout from "../../components/Logout/Logout"
import EditActivity from "./EditActivities/EditActivity"

function BackofficeItems() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [selectedActivity, setSelectedActivity] = useState(null)
  const { activities } = useFetchActivities()

  // DELETE
  const handleDeleteActivity = async (activity) => {
    try {
      const response = await fetch(
        `http://localhost:3042/activity/${activity._id}`,
        {
          method: "DELETE",
        }
      )
      if (response.ok) {
        setSelectedActivity(null);
        setActiveComponent("activities");
      }
    } catch (error) {
      console.error("Error deleting activity:", error)
    }
  }

  // Knapperne i toppen
  const EditButtons = () => (
    <div className={styles.editButtons}>
      <button
        onClick={() => setActiveComponent(null)}
        className={styles.editBtn}>
        Tilbage til frontend
      </button>
      <button
        onClick={() => setActiveComponent("activities")}
        className={styles.editBtn}>
        Alle aktiviteter
      </button>
    </div>
  )

  // Styrer hvilket komponent er åben
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "edit":
        return (
          <EditActivity isEditing={true} selectedActivity={selectedActivity} />
        )
      case "add":
        return <EditActivity />
      case "activities":
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
        return null
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