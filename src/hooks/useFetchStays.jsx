import { useEffect, useState } from "react"

const useFetchStays = () => {
  const [stays, setStays] = useState([])
  const [stay, setStay] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchStays = async () => {
    try {
      const response = await fetch("http://localhost:3042/stays") 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setStays(data.data) 
    } catch (err) {
      setError(err.message || "Something went wrong") 
    } finally {
      setIsLoading(false) 
    }
  }

  useEffect(() => {
    fetchStays()
  }, [])

  const fetchStayById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/stay/${id}`) 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json() 
      setStay(data.data) 
    } catch (err) {
      setError(err.message || "Something went wrong") 
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStayById()
  }, []) 

  return { stays, stay, fetchStayById, isLoading, error }
}

export { useFetchStays }