import React from 'react'
import PageContainer from '../components/PageContainer'
import ContactLinks from '../components/ContactLinks';
import ContactForm from '../components/ContactForm';

const Contact = () => {

	return (
		<div id="contact" style={{ backgroundColor: "#165BAA", color: "white" }}>
			<PageContainer>
				<div style={{ display: "flex" }}>
					<div style={{ width: "50%" }}>
						<h1>Contact</h1>
						<p>
							Thank you so much for visiting my website! Please feel free to connect with me through the links below. If anything here piqued your interest or if you would like a chat, send me a message through the form or via any of my socials. Looking forward to meeting you!
						</p>
						<h2>Let's Connect!</h2>
						<ContactLinks />
					</div>
					<div style={{ width: "50%", display: "flex" }}>
						<ContactForm />
					</div>
				</div>
			</PageContainer>
		</div>
	)
}


export default Contact;
