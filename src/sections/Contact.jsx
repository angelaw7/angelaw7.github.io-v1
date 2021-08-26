import React from 'react'
import PageContainer from '../components/PageContainer'
import { useForm, ValidationError } from '@formspree/react';

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
					</div>
					<div style={{ width: "50%" }}>
						{state.succeeded ? <p>Thanks for your message! I'll get back to you shortly.</p> : <form onSubmit={handleSubmit}>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Email Address"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<textarea
								id="message"
								name="message"
								placeholder="Message"
							/>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
							<button type="submit" disabled={state.submitting}>
								Submit
							</button>
						</form>}
					</div>
				</div>
			</PageContainer>
		</div>
	)
}

export default Contact
