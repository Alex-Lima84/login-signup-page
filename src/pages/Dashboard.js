import React from "react"

import { StyledTitle,              
         StyledButton, 
         ButtonGroup, 
         StyledFormArea, 
         colors
        } from "./../components/Styles";


const Dashboard = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
        >           
        </div>
        <StyledFormArea bg={colors.dark2}>
            <StyledTitle size={65}>WELCOME</StyledTitle>           
            <ButtonGroup>
                <StyledButton to="#">Logout</StyledButton>
            </ButtonGroup>
        </StyledFormArea>
        
        </div>
    )
}

export default Dashboard;
     

           



