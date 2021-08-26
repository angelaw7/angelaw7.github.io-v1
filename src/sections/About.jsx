import React from 'react'
import PageContainer from '../components/PageContainer'

const About = () => {
	return (
		<div>
			<PageContainer>
				<h1>About Me</h1>
				<p>
					Hello and welcome to my little bubble in the internet! My name is Angela and I’m a Software & Biomedical Enginnering student at McMaster University. I’m passionate about healthcare and technology, and I hope to one day work on developing innovate biomedical devices and software.
					<br /><br />
					Over the summer, I was a Fellow in the Production Engineering Fellowship, organized by Major League Hacking (MLH) and powered by Facebook. I learned about DevOps skills by creating a web application hosted on an AWS EC2 instance, containerizing it with Docker, and implementing CI/CD, testing, and monitoring. I hope to use these skills when working on future projects to automate processes and ensure proper functionality and quality.
					<br /><br />
					When I’m not in front of a computer screen, you can often find me swimming, rock climbing, and going out for walks. I love trying new foods and deserts, and I want to travel more in the future to experience different cultures.
				</p>
			</PageContainer>
		</div>
	)
}

export default About
