import React from 'react'
import PageContainer from '../components/PageContainer'
import { IonRow } from '@ionic/react'
import ExperienceCard from '../components/ExperienceCard'
import mlhLogo from '../imgs/mlh-logo.png';
import makriaLogo from '../imgs/makria-logo.png';
import recursionLogo from '../imgs/recursion-logo.png';
import mskccLogo from '../imgs/mskcc-logo.webp';

const experiences = [
    {
        id: 4, company: "Recursion Pharmaceuticals", position: "Software Engineering Intern", img: recursionLogo,
        desc: "Designing and developing an internal application to serve as the user interface of a review process \
        by using React, Flask and PostgreSQL, reducing the time it takes to push a single ticket to the next step \
        in the process by over 70% on average. Identifying and verifying current project requirements by regularly\
        acquiring feedback from stakeholders.",
        date: "May - August 2022"
    },
    {
        id: 3, company: "Memorial Sloan Kettering & Major League Hacking", position: "Open-Source Backend Developer", img: mskccLogo,
        desc: "Developing a service written in Golang and deployed using Docker that reads and writes to a MongoDB \
        database and streams data through a NATS server, increasing backend pipeline efficiency by 30%. \
        Regularly demonstrating, reviewing code, and clarifying task requirements with project maintainers.",
        date: "June - August 2022"
    },
    {
        id: 2, company: "Major League Hacking & sponsored by Meta", position: "Production Engineering Fellow", img: mlhLogo,
        desc: "Selective project-based program focused on developing DevOps, site reliability engineering, and software \
        engineering skills. Followed the Linux Foundation Training & Certification curriculum under mentorship from Facebook \
        mentors. Learned about and utilized AWS instances, services, containerization, CI/CD, testing, monitoring, and networking.",
        date: "June - August 2021"
    },
    {
        id: 1, company: "Makria Youth Centre of Excellence", position: "Web Designer & Developer", img: makriaLogo,
        desc: "Designed and developed a website using WordPress, HTML5, CSS, JavaScript, and PHP. Used various plugins, \
        created and managed registration forms using a built-in database, and integrated donation and eCommerce functionality.",
        date: "June - August 2021"
    }
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
