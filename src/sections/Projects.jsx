import React from 'react'
import PageContainer from '../components/PageContainer'
import { IonRow } from '@ionic/react'
import ProjectCard from '../components/ProjectCard'
import project1img from '../imgs/bgimg.png';

const projects = [
    { id: 1, title: "Sample", img: project1img, desc: "Sample description sample description sample description sample description ", link: "https://google.ca" },
    { id: 2, title: "Sample", img: project1img, desc: "Sample description sample description sample description sample description ", link: "https://google.ca" },

]

const Projects = () => {
    return (
        <div id="projects" style={{ backgroundColor: "#F9D1D1" }}>
            <PageContainer>
                <h1>Projects</h1>
                <IonRow>
                    {projects.map(project => { return (<ProjectCard key={project.id} title={project.title} img={project.img} desc={project.desc} link={project.link} />) })}
                </IonRow>
            </PageContainer>
        </div>
    )
}

export default Projects
