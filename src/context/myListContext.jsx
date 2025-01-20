import React, { createContext, useContext, useState, useEffect } from "react"

const myListContext = createContext()

export const useMyList = () => useContext(myListContext)

export const MyListProvider = ({ children }) => {
  const [list, setList] = useState([])

  // Hent liste fra lokal lagring ved start
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || []
    setList(storedList)
  }, [])

  // Opdater lokal lagring, når liste ændres
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list))
  }, [list])

  const addToList = (activity) => {
    if (!list.find((list) => list.title === activity.title)) {
        setList((prev) => [...prev, activity])
    }
  }

  const removeFromList = (title) => {
    setList((prev) => prev.filter((list) => list.title !== title))
  }

  return (
    <myListContext.Provider value={{ list, addToList, removeFromList }}>
      {children}
    </myListContext.Provider>
  )
}