import { useEffect, useState } from "react"

const useFetchActivities = async () => {
    const [activities, setActivities] = useState([])

    const fetchActivities = async () => {
        try {
            const response = await fetch ('http://localhost:3042/activities')
            const data = await response.json()
            console.log(data)
            setActivities(data.data)
        } catch (error) {
            console.error("Error fetching activities", error)
        }
    }

    useEffect(() => {
        fetchActivities()
    }, [])

    return {
        activities
    }
}

export {useFetchActivities}