import React from 'react'
import PageContainer from '../components/PageContainer'
import Skill from '../components/Skill'

const Skills = () => {
    return (
        <div id="skills" style={{ backgroundColor: "#F9D1D1" }}>
            <PageContainer>
                <h1>Skills</h1>
                <Skill />
            </PageContainer>
        </div>
    )
}

export default Skills
