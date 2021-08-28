import React from 'react'
import PageContainer from '../components/PageContainer'
import { IonRow } from '@ionic/react'
import ExperienceCard from '../components/ExperienceCard'
import makrialogo from '../imgs/makrialogo.png';
import mlhlogo from '../imgs/mlhlogo.png';

const experiences = [
    {
        id: 1, company: "Major League Hacking (MLH)", position: "Production Engineering Fellow", img: mlhlogo,
        desc: "Selective project-based program focused on developing DevOps, site reliability engineering, and software engineering skills. Followed the Linux Foundation Training & Certification curriculum under mentorship from Facebook mentors. Learned about and utilized AWS instances, services, containerization, CI/CD, testing, monitoring, and networking.",
        date: "June - Aug 2021"
    },
    {
        id: 1, company: "Makria Youth Centre of Excellence", position: "Web Designer & Developer", img: makrialogo,
        desc: "Designed and developed a website using WordPress, HTML5, CSS, JavaScript, and PHP. Used various plugins, created and managed registration forms using a built-in database, and integrated donation and eCommerce functionality.",
        date: "June - Aug 2021"
    },

]

const Experience = () => {
    return (
        <div id="experience" style={{ backgroundColor: "#abcfec" }}>
            <PageContainer>
                <h1>Experience</h1>
                <IonRow>
                    {experiences.map(experience => { return (<ExperienceCard key={experience.id} company={experience.company} position={experience.position} date={experience.date} img={experience.img} desc={experience.desc} />) })}
                </IonRow>
            </PageContainer>
        </div>
    )
}

export default Experience
