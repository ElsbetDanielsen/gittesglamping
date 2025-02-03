import { useEffect, useState } from "react"

// Custom hook for fetching activities
const useFetchActivities = () => {
  // State to hold the list of activities
  const [activities, setActivities] = useState([])

  // State to hold a single activity (based on ID)
  const [activity, setActivity] = useState([])

  // State to indicate loading status
  const [isLoading, setIsLoading] = useState(true)

  // State to handle any potential errors
  const [error, setError] = useState(null)

  // Function to fetch all activities from the API
  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:3042/activities") // Fetch data from the activities endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`) // Handle HTTP errors
      }
      const data = await response.json() // Parse the JSON response
      setActivities(data.data) // Update the activities state
    } catch (err) {
      setError(err.message || "Something went wrong") // Set error message if fetch fails
    } finally {
      setIsLoading(false) // Set loading to false regardless of success or failure
    }
  }

  // Fetch activities when the component using this hook mounts
  useEffect(() => {
    fetchActivities()
  }, []) // Empty dependency array ensures this runs only once on mount

  // Function to fetch a single activity by ID
  const fetchActivityById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/activity/${id}`) // Fetch activity by ID
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`) // Handle HTTP errors
      }
      const data = await response.json() // Parse the JSON response
      setActivity(data.data) // Update the activity state
    } catch (err) {
      setError(err.message || "Something went wrong") // Set error message if fetch fails
    } finally {
      setIsLoading(false) // Set loading to false regardless of success or failure
    }
  }

  // This useEffect is unnecessary because `fetchActivityById` is only useful when invoked manually
  useEffect(() => {
    fetchActivityById() // This will run without an ID and likely throw an error
  }, []) // Suggest removing this to avoid unexpected behavior

  // Return the state and functions to the component that uses this hook
  return { activities, activity, fetchActivityById, isLoading, error }
}

export { useFetchActivities }