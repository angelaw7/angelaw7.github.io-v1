import React from 'react'
import { IonCol, IonIcon, IonRow, IonText } from '@ionic/react'
import { logoHtml5, logoCss3, logoReact, logoDocker, logoPython, logoJavascript, logoGithub, logoTux, logoWordpress } from 'ionicons/icons';
import { SiFlask, SiVisualstudiocode, SiGit, SiFigma, SiAmazonaws, SiRaspberrypi } from 'react-icons/si'
import { HiDatabase } from 'react-icons/hi'

const skills = [
    { name: "Python", logo: logoPython },
    { name: "JavaScript", logo: logoJavascript },
    { name: "HTML", logo: logoHtml5 },
    { name: "CSS", logo: logoCss3 },
    { name: "React", logo: logoReact },
    { name: "Docker", logo: logoDocker },
    { name: "Linux", logo: logoTux },
    { name: "GitHub", logo: logoGithub },
    { name: "WordPress", logo: logoWordpress },
]

const SkillsList = () => {

    const Col = (props) => {
        return (
            <IonCol
                style={{ alignItems: "center", flexDirection: "column", display: "flex", padding: "10px" }}
                sizeSm={3}
                sizeMd={1.5}
            >
                {props.children}
            </IonCol>
        )
    }

    return (
        <IonRow style={{ alignItems: 'center' }} >
            {skills.map((skill) => (
                <Col key={skill.name} >
                    <IonIcon icon={skill.logo} style={{ pointerEvents: 'none' }} size="large" />
                    <IonText >{skill.name}</IonText>
                </Col>
            ))}
            <Col >
                <HiDatabase size="30" />
                SQL
            </Col>
            <Col >
                <SiFlask size="30" />
                Flask
            </Col>
            <Col >
                <SiVisualstudiocode size="30" />
                VSCode
            </Col>
            <Col >
                <SiGit size="30" />
                Git
            </Col>
            <Col >
                <SiAmazonaws size="30" />
                AWS
            </Col>
            <Col >
                <SiRaspberrypi size="30" />
                Raspberry Pi
            </Col>
            <Col >
                <SiFigma size="30" />
                Figma
            </Col>
        </IonRow>
    )
}

export default SkillsList;
