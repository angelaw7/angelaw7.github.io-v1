import React from 'react'
import { IonCol, IonRow } from '@ionic/react'
import PageContainer from '../components/PageContainer'

const About = () => {
	return (
		<div id="about">
			<PageContainer>
				<h1>About</h1>
				<IonRow>
					{/* <div style={{ display: "flex" }}> */}
					{/* <div style={{ paddingRight: "40px" }}> */}
					<IonCol style={{ paddingRight: "40px" }} size="12" size-sm>
						<p>
							Hello and welcome to internet bubble! My name is Angela Wang and I’m a Software & Biomedical Enginnering student at McMaster University, in Hamilton, Ontario. I’m passionate about healthcare and technology, and I hope to one day work on developing innovate biomedical devices and software.
							<br /><br />
							Over the summer, I was a Fellow in the Production Engineering Fellowship, organized by Major League Hacking (MLH) and powered by Facebook. I learned about DevOps skills by creating a web application hosted on an AWS EC2 instance, containerizing it with Docker, and implementing CI/CD, testing, and monitoring. I hope to use these skills when working on future projects to automate processes and ensure proper functionality and quality.
							<br /><br />
							When I’m not in front of a computer screen, I usually like to go swimming, rock climbing, or out for a walk. I also wish to travel more in the future to experience different cultures and lifestyles, admire scenery, and to try new food!						</p>
					</IonCol>
					{/* </div> */}
					{/* <div> */}
					<IonCol size="4">
						<iframe
							title="codeBlock"
							src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fjson&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=15px&lh=151%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2522name%2522%253A%2520%2522Angela%2520Wang%2522%252C%250A%2520%2522location%2522%253A%2520%2522Hamilton%252C%2520Ontario%2522%252C%250A%2520%2522interests%2522%253A%2520%255B%2522Machine%2520Learning%2522%252C%250A%2509%2522Computer%2520Vision%2522%252C%2520%2522DevOps%2522%252C%250A%2509%2522Web%252FApp%2520Development%2522%255D%250A%2520%257D"
							style={{ width: "385px", height: "201px", border: 0, transform: "scale(1)", overflow: "hidden" }}
							sandbox="allow-scripts allow-same-origin">
						</iframe>
					</IonCol>
					{/* </div> */}
					{/* </div> */}
				</IonRow>

			</PageContainer>
		</div >
	)
}

export default About
