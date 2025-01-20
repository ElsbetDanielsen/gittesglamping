import { useState } from 'react'
import styles from './backoffice.module.css'
import Logout from '../../components/Logout/Logout'
import {useFetchActivities} from '../../hooks/useDataFetch'

function BackofficeItems() {
    const [activeComponent, setActiveComponent] = useState(null)
    const [selectedActivity, setSelectedActivity] = useState(null)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [successMessage, setSuccessMessage] = useState("")

    const {activities} = useFetchActivities()
    console.log(activities)

    // Knapperne i toppen
    const EditButtons = () => {
        return (
            <div className={styles.editButtons}>
                <button onClick={() => setActiveComponent(null)} className={styles.editBtn}>
                    Tilbage til frontend
                </button>
                <button onClick={() => setActiveComponent('edit')} className={styles.editBtn}>
                    Rediger aktiviteter
                </button>
                <button onClick={() => setActiveComponent('add')} className={styles.editBtn}>
                    Tilføj en aktivitet
                </button>
            </div>
        )
    }

    // Styrer hvilket komponentet der er åbnet
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'edit':
                return <EditActivity />
            case 'add':
                return <AddActivity isEditing={true} selectedActivity={selectedActivity} />
            case 'update':
                return <UpdateActivity />
            default:
                return null // Viser ingenting, hvis intet komponent er valgt
        }
    }

    // Rediger aktivitet (update eller delete)
    const EditActivity = () => {
        return (
            <div className={styles.editAktivitet}>
                <h2>Rediger Aktivitet</h2>
                {activities?.map((activity) => (
                    <div key={activity._id} className={styles.aktivitet}>
                        <p>{activity.title}</p>
                        <div className={styles.updateButtons}>
                            <button
                                onClick={() => {
                                    setSelectedActivity(activity)
                                    setActiveComponent('add')
                                }}
                            >
                                Opdater aktivitet
                            </button>
                            <button
                                onClick={() => handleDeleteActivity(activity)}
                            >
                                Slet aktivitet
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


    // POST
    const AddActivity = ({ isEditing, selectedActivity }) => {
        console.log(isEditing, selectedActivity)
        /* const [formData, setFormData] = useState({ title: "", date: "", time: "", description: "", image: "" }) */
    
        /* const handleChange = (e) => {
            const { name, value } = e.target
            setFormData((prev) => ({ ...prev, [name]: value }))
        } */

        const handleImageChange = (event) => {
            setImage(event.target.files[0])
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault()

            const formData = new FormData()
            formData.append("title", title)
            formData.append("date", date)
            formData.append("time", time)
            formData.append("description", description)
 
            if (image) {
                formData.append("file", image)
            }

            try {
                const response = await fetch("http://localhost:3042/activity", {
                    method: "POST",
                    body: formData
                })
                console.log(response)
                /* if (response.ok) {
                    setFormData({ title: "", date: "", time: "", description: "", image: "" })
                    setSuccessMessage("Aktiviteten blev tilføjet med succes!") 
                } */
               const data = await response.json()
               console.log(data)
            } catch (error) {
                console.error("Error:", error)
            }
        }

        return (
            <div className={styles.editAktivitet}>
                {isEditing ? <h2>Opdater en Aktivitet</h2> : <h2>Tilføj en Aktivitet</h2>}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                <form onSubmit={handleSubmit} className={styles.editContent}>
                    <div className={styles.editInput}>
                        <p>Aktivitet</p>
                        <input 
                            type="text" 
                            placeholder="Tilføj titel"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.editInput}>
                        <p>Dato</p>
                        <input 
                            type="text" 
                            placeholder="Tilføj dato" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.editInput}>
                        <p>Tidspunkt</p>
                        <input 
                            type="text" 
                            placeholder="Tilføj tidspunkt (Fra - til)" 
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.editInput}>
                        <p>Beskrivelse</p>
                        <textarea 
                            placeholder="Tilføj beskrivelse" 
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className={styles.editInput}>
                        <p>Billede</p>
                        <input 
                            className={styles.noFileChosen} 
                            type="file" 
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                    {isEditing ? <button type="submit" className={styles.aktivitetButton}>Opdater en Aktivitet</button> : <button type="submit" className={styles.aktivitetButton}>Tilføj en Aktivitet</button>}
                </form>
            </div>
        )
    }

    // PUT
    /* const UpdateActivity = () => {
        return (
            <div className={styles.editAktivitet}>
                <h2>Opdater Aktivitet - {selectedActivity}</h2>
                <form className={styles.editContent}>
                    <div className={styles.editInput}>
                        <p>Aktivitet</p>
                        <input type="text" placeholder="Tilføj titel" />
                    </div>
                    <div className={styles.editInput}>
                        <p>Dato</p>
                        <input type="date" placeholder="Tilføj dato" />
                    </div>
                    <div className={styles.editInput}>
                        <p>Tidspunkt</p>
                        <input type="time" placeholder="Tilføj tidspunkt" />
                    </div>
                    <div className={styles.editInput}>
                        <p>Beskrivelse</p>
                        <textarea placeholder="Tilføj beskrivelse"></textarea>
                    </div>
                    <div className={styles.editInput}>
                        <p>Billede</p>
                        <input className={styles.noFileChosen} type="file" />
                    </div>
                </form>
                <button className={styles.aktivitetButton}>Opdater aktivitet</button>
            </div>
        )
    } */

    // DELETE
    const DeleteActivity = (activity) => {
        console.log(`Sletning af aktivitet: ${activity}`)
        // Her kan du tilføje logik til at slette aktiviteten fra listen.
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