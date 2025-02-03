import { useEffect, useState } from "react"

const useFetchReviews = () => {
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchReviewss = async () => {
    try {
      const response = await fetch("http://localhost:3042/reviews") 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setReviews(data.data) 
    } catch (err) {
      setError(err.message || "Something went wrong") 
    } finally {
      setIsLoading(false) 
    }
  }

  useEffect(() => {
    fetchReviewss()
  }, [])

  const fetchReviewById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/review/${id}`) 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json() 
      setReview(data.data) 
    } catch (err) {
      setError(err.message || "Something went wrong") 
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReviewById()
  }, []) 

  return { reviews, review, fetchReviewById, isLoading, error }
}

export { useFetchReviews }