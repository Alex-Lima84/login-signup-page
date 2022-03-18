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
                            email: Yup.string().email("INCORRECT EMAIL ADDRESSL").required("REQUIRED"),
                            password: Yup.string().min(8, "PASSWORD TOO SHORT").max(30, "PASSWORD TOO LONG").required("REQUIRED"),
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
