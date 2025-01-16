import { useEffect, useState } from "react"

const fetchActivities = async () => {
    const [activity, setActivity] = useState([])

    const fetchActivity = async () => {
        const response = await fetch ('http://localhost:3042/activities')
        const data = await response.json()
        setActivity(data)
    }

    useEffect(() => {
        fetchActivity()
    }, [])

    return (
        activity
    )
}

export default fetchActivities