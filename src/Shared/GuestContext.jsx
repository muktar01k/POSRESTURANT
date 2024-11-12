import { createContext, useState } from "react";


export const GuestContext = createContext()
export const GuestProvider = ({ children }) => {
    const [numOfGuest, setNumOfGuest] = useState(0)


    return (
        <GuestContext.Provider value={{ numOfGuest, setnumOfGuest: setNumOfGuest }}>
            {children}
        </GuestContext.Provider>
    )
}