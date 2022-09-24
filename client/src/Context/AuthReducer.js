import { createContext, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const { } = useFetch();

    const value = {

    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext