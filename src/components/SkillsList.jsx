import React from 'react'
import { IonCol, IonIcon, IonRow, IonText } from '@ionic/react'
import { logoHtml5, logoCss3, logoReact, logoDocker, logoPython, logoJavascript, logoGithub, logoTux, logoWordpress } from 'ionicons/icons';

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
    return (
        <IonRow>
            {skills.map((skill) => (
                <IonCol key={skill.name} >
                    <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
                        <IonIcon icon={skill.logo} style={{ pointerEvents: 'none' }} size="large" />
                        <IonText >{skill.name}</IonText>
                    </div>
                </IonCol>
            ))}
        </IonRow>
    )
}

export default SkillsList;
