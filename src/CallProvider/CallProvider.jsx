import React, { createContext, useState } from "react";
export const callContext = createContext();
const CallProvider = ({children}) => {
    const [call, setCall] = useState([]);
    return(
        <div>
           <callContext.Provider value={{call, setCall}}>
               {children}
           </callContext.Provider>
        </div>
    )
}
export default CallProvider;