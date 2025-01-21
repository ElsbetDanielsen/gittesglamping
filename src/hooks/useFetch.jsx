import { useEffect, useState } from "react"

const useFetchActivities = () => {
  const [activities, setActivities] = useState([])
  const [activity, setActivity] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:3042/activities")
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setActivities(data.data)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  const fetchActivityById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/activity/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setActivity(data.data)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchActivityById()
  }, [])

  return { activities, activity, fetchActivityById, isLoading, error }
}

export { useFetchActivities }