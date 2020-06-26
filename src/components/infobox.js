import React from "react"

const InfoBox = ({ type, children }) => {
    switch(type) {
        case "warning":
            return ( 
                <div style={{color: "#856404", backgroundColor: "#fff3cd", borderColor: "#ffeeba", padding: ".75rem 1.25rem", marginBottom: "1rem", border: "1px solid transparent", borderRadius: ".25rem"}} role="alert"> 
                    {children}
                </div>
            )
        case "error":
            return (
                <div style={{color: "#721c24", backgroundColor: "#f8d7da", borderColor: "#f5c6cb", padding: ".75rem 1.25rem", marginBottom: "1rem", border: "1px solid transparent", borderRadius: ".25rem"}} role="alert"> 
                    {children}
                </div>
            )
        default:
            return (
                <div style={{color: "#004085", backgroundColor: "#cce5ff", borderColor: "#b8daff", padding: ".75rem 1.25rem", marginBottom: "1rem", border: "1px solid transparent", borderRadius: ".25rem"}} role="alert"> 
                    {children}
                </div>
            )
    }
};

export default InfoBox
