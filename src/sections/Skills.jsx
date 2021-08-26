import React from 'react'
import PageContainer from '../components/PageContainer'
import SkillsList from '../components/SkillsList'

const Skills = () => {
    return (
        <div id="skills" style={{ backgroundColor: "#F9D1D1" }}>
            <PageContainer>
                <h1>Skills</h1>
                <SkillsList />
            </PageContainer>
        </div>
    )
}

export default Skills
