import React, { createContext, useState } from "react";
export const callContext = createContext();
const CallProvider = ({children}) => {
    const [call, setCall] = useState([]);
    const [loading, setLoading] = useState(false);
    return(
        <div>
           <callContext.Provider value={{call, setCall, loading, setLoading}}>
               {children}
           </callContext.Provider>
        </div>
    )
}
export default CallProvider;