import { createContext, useContext } from "react";

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthContext = (children) => {
    const[currentUser, setCurrentUser] = useState(null)

    const value = {

    }

    return (
        <authContext.Provider {...{ value }}>{children}</authContext.Provider>
    )
}

export default AuthContext