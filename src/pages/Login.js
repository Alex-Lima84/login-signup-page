import React from "react"

//Styled Components
import {
    StyledFormArea, StyledFormButton, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText
} from "./../components/Styles";

//Formik
import {Formik, Form} from "formik";
import {TextInput} from "./../components/FormLib";
import * as Yup from 'yup';

//ícones na caixa de e-mail e senha
import {FiMail, FiLock} from 'react-icons/fi';

//auth e redux
import {connect} from 'react-redux';
import {loginUser} from "./../auth/actions/userActions"
import {useNavigate } from "react-router-dom";

const Login = ({loginUser}) => {
        const history = useNavigate();
    return (
        <div>
            <StyledFormArea>               
                <StyledTitle color={colors.theme} size={30}>MEMBER LOGIN</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("ENDEREÇO INCORRETO DE E-MAIL").required("CAMPO OBRIGATÓRIO"),
                            password: Yup.string().min(8, "SENHA MUITO CURTA").max(30, "SENHA MUITO LONGA").required("CAMPO OBRIGATÓRIO"),
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting)        
                    }} 
                >
                    {() =>(
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label=" Email Address"
                                placeholder="example@example.com" 
                                icon={<FiMail />}
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                <StyledFormButton>LOGIN</StyledFormButton>
                                
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    FIRST TIME? <TextLink to="/signup">SIGNUP</TextLink> 
                </ExtraText>
                <ExtraText>
                <TextLink to="/">HOME</TextLink> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                ALL RIGHTS RESERVED &copy;2022
            </CopyrightText>
        </div>
    )
}


export default connect(null, {loginUser})(Login);