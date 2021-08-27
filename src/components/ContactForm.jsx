
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjvjpnlp");

    return (
        <>
            {state.succeeded ? <p>Thanks for your message! I'll get back to you shortly.</p> :
                <Form onSubmit={handleSubmit} >
                    <input name="_subject" type="hidden" value="New message from personal website contact form" />
                    <ContactEmail
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        style={{ marginTop: "-8px", marginBottom: "10px", fontSize: "12px" }}
                    />
                    <ContactMsg
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <ContactBtn type="submit" disabled={state.submitting}>
                        Submit
                    </ContactBtn>
                </Form>
            }
        </>
    )
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
`

const ContactEmail = styled.input`
	border-radius: 6px;
	margin-bottom: 10px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	border: 0;
	padding: 10px;
	&:focus {
		outline: none;
	}
`

const ContactMsg = styled.textarea`
	border-radius: 6px;
	margin-bottom: 10px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	border: 0;
	padding: 10px;
	height: 100px;
	resize: none;
	&:focus {
		outline: none;
	}
`

const ContactBtn = styled.button`
	border-radius: 6px;
	padding: 8px;
	border: 0;
	background-color: #4CAF50;
	color: white;
	font-size: 16px;
	cursor: pointer;
    &:hover {
        background-color: #3c9c3f;
    }
`

export default ContactForm;
