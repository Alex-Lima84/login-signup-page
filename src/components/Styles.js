import styled from 'styled-components';

//background (plano de fundo)
import background from './../assets/bg.png';

//React router (criar rotas para navegar entre telas, onde cada rota representa uma tela)
import {Link} from 'react-router-dom';

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "##F3F4F6",
    light2: "E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#DC2626",
    black: "#000000",
    red: "#DC143C",
    grey: "#D3D3D3"
}

export const StyledContainer = styled.div` 
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachement: fixed;
`;

//Home page style
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px; 
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: "transparent";
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;     
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px
`;

//Campo de entrada de dados (Input Field)
export const StyledTextInput = styled.input`
    width: 300px;
    padding: 15px 15px 10px 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
    
    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;
// Texto endere??o de e-mail e senha
export const StyledLabel = styled.p`
    text-align: left;
    font-size: 20px;
    font-weight: bold;    
`;

export const StyledFormArea = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: ${props => props.bg || colors.grey};
    text-align: center;
    padding: 45px 55px;
    border-radius: 10px 10px 10px 10px;
`;


// Bot??o LOGIN
export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.black}; 
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;     
    }    
`;

export const ErrorMsg = styled.div`
    font-size: 15px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color? props.color : colors.dark2)}
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &: hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

// ??cones
export const StyledIcon = styled.p`     
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`}
`;

// mensagem de "Copyright"
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.primary};
`;
