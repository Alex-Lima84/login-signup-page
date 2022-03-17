import React from "react"
import {useState} from 'react';
import {useField} from "formik";
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from "./../components/Styles";

//olho para o campo senha
import {FiEyeOff, FiEye} from 'react-icons/fi';

// variável Field e Meta, que contém informações sobre o Field
export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    
//posicionamento dos campos de e-mail e senha (style e não styled)
    return(
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

            {props.type !== "password" && (<StyledTextInput invalid={meta.touched && meta.error} {...field} {...props} />)} 
           
            {props.type === "password" && (<StyledTextInput invalid={meta.touched && meta.error} {...field} {...props} type={show ? "text" : "password"} />)}
            <StyledIcon>{icon}</StyledIcon>

            {props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
            )}
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    )
}