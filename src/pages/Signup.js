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
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';


//auth e redux
import {connect} from 'react-redux';
import {signupUser} from "./../auth/actions/userActions"
import {useNavigate } from "react-router-dom";

const Signup = ({signupUser}) => {
        const history = useNavigate();
    return (
        <div>
            <StyledFormArea>
                
                <StyledTitle color={colors.theme} size={30}>SIGNUP</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfbirth: "",
                        name: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("INCORRECT EMAIL ADDRESS").required("REQUIRED"),
                            password: Yup.string().min(8, "PASSWORD TOO SHORT").max(30, "PASSWORD TOO LONG").required("REQUIRED"),
                            name: Yup.string().required("REQUIRED"),
                            dateOfBirth: Yup.date().required("REQUIRED"),
                            repeatPassword: Yup.string().required("REQUIRED").oneOf([Yup.ref("password")], "MUST BE THE SAME PASSWORD")
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        signupUser(values, history, setFieldError, setSubmitting);
                    }} 
                >
                    {() =>(
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Complete name "
                                placeholder="John Wick" 
                                icon={<FiUser />}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email address"
                                placeholder="example@example.com" 
                                icon={<FiMail />}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of birth"
                                icon={<FiCalendar />}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />
                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Repeat password"
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
                    ALREADY A MEMBER? <TextLink to="/login">LOGIN</TextLink> 
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


export default connect(null, {signupUser}) (Signup);
