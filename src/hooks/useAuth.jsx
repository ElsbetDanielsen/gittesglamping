import { useLocalStorage } from "@uidotdev/usehooks"
import { jwtDecode}  from "jwt-decode"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [user, setUser] = useLocalStorage("user", {})
    const [auth, setAuth] = useLocalStorage("auth", {})
    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()
        setError("")

        try {
            const response = await fetch("http://localhost:3042/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            if (!response.ok) {
                const errordata = await response.json()
                throw new Error(errordata.message || "Login failed.")
            }

            const result = await response.json()
            const user = jwtDecode(result.data.token)
            setUser(user)
            setAuth({ token: result.data.token })
            navigate("/backoffice")
        } catch (err) {
            setError(err.message)
        }
    }

    const signOut = () => {
        setAuth({})
        setUser({})
        navigate("/login")
    }

    const token = auth.token || ""
    const signedIn = !!auth.token

    return {
        signIn,
        signedIn,
        signOut,
        token,
        email,
        setEmail,
        password,
        setPassword,
        user,
        error,
    }
}

export default useAuth