import React from 'react'
import PageContainer from '../components/PageContainer'
import { IonRow } from '@ionic/react'
import ProjectCard from '../components/ProjectCard'
import devupImg from '../imgs/DevUp.png';

const projects = [
    {
        id: 1, title: "DevUp", img: devupImg,
        desc: "A CRUD web application built with a Flask backend and React frontend. Purpose is to help developers find others to collaborate with on side projects. Hosted on an AWS EC2 instance using Docker containers. Implemented CI/CD with GitHub Actions, frontend and backend testing, and monitoring with cAdvisor, Grafana, and Prometheus.",
        repo: "https://github.com/LaloVene/MLH-PE-Project",
        website: "https://dev-up.tech"
    },

]

const Projects = () => {
    return (
        <div id="projects" style={{ backgroundColor: "#F9D1D1" }}>
            <PageContainer>
                <h1>Projects</h1>
                <IonRow>
                    {projects.map(project => { return (<ProjectCard key={project.id} title={project.title} img={project.img} desc={project.desc} website={project.website} repo={project.repo} />) })}
                </IonRow>
            </PageContainer>
        </div>
    )
}

export default Projects
