import { createContext, useEffect, useState } from "react"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authState, setAuthState] = useState("idle")

    async function login(email, password) {
        setAuthState("loading")
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
            setAuthState("authenticated")
        } catch (error) {
            setAuthState("unauthenticated")
            throw Error(error.message)
        }
    }

    async function register(email, password) {
        setAuthState("loading")
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            setAuthState("unauthenticated")
            throw Error(error.message)
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current")
        } catch (error) {
            console.log("Session destruction bypassed: No active token existed on server.");
        } finally {
            setUser(null)
            setAuthState("unauthenticated")
        }
    }

    async function checkSessionStatus() {
        setAuthState("loading")
        try {
            const response = await account.get()
            setUser(response)
            setAuthState("authenticated")
        } catch (error){
            setUser(null)
            setAuthState("unauthenticated")
        }
    }

    useEffect(() => {
        checkSessionStatus()
    }, [])

    return (
        <UserContext.Provider value={{
            user, authState, login, logout, register,
        }}>
            {children}
        </UserContext.Provider>
    );
}