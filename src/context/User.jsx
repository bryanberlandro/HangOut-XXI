/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line no-unused-vars
const UserContextProvider = ({children}) => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(userLocal)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserProfile = UserContext;
export default UserContextProvider