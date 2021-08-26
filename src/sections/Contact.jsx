import React from 'react'
import PageContainer from '../components/PageContainer'
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import ContactLinks from '../components/ContactLinks';

const Contact = () => {
	const [state, handleSubmit] = useForm("mjvjpnlp");

	return (
		<div id="contact" style={{ backgroundColor: "#165BAA", color: "white" }}>
			<PageContainer>
				<div style={{ display: "flex" }}>
					<div style={{ width: "50%" }}>
						<h1>Contact</h1>
						<p>
							Thank you so much for visiting my website! Please feel free to connect with me through the links below. If anything here piqued your interest or if you would like a chat, send me a message through the form on the right or via any of my socials. Looking forward to meeting you!
						</p>
						<h2>Let's Connect!</h2>
						<ContactLinks />
					</div>
					<div style={{ width: "50%", display: "flex" }}>
						{state.succeeded ? <p>Thanks for your message! I'll get back to you shortly.</p> : <Form onSubmit={handleSubmit} >
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
						</Form>}
					</div>
				</div>
			</PageContainer>
		</div>
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
`

export default Contact
