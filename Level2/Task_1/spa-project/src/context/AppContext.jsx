
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [username, setUsername ] = useState("Mahak");


return (
    <AppContext.Provider value = {{ username, setUsername}} >
        {children}
    </AppContext.Provider>
);
};