import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const isLogged = () => !!user;

    const login = async(userCredentials) => {
        const userData = await makeLogin(userCredentials);
        if (await userData.status === "ok"){
            setUser({name: userData.user.name, username: userData.user.username})
        }
    }

    const logout = () => setUser(null)

    async function makeLogin(userCredentials) {
        
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCredentials)
        })

        const data = await res.json()

        console.log(data)
    }

    const contextValue = {
        user,
        isLogged,
        login,
        logout
    }


    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}