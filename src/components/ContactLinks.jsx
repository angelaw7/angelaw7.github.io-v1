import React from 'react'
import { IonCol, IonIcon, IonRow } from '@ionic/react'
import { logoLinkedin, mail, logoGithub } from 'ionicons/icons';
import styled from 'styled-components';

const contactLinks = [
    { site: "https://www.linkedin.com/in/angelawwang/", logo: logoLinkedin },
    { site: "https://github.com/angelaw7", logo: logoGithub },
    { site: "mailto:angelaxwang7@gmail.com", logo: mail },
]

const ContactLinks = () => {
    return (
        <IonRow style={{ width: "40%" }}>
            {contactLinks.map((link) => (
                <IonCol key={link.site} >
                    <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
                        <a href={link.site} target="_blank" rel="noreferrer" >
                            <Icon site={link.site} icon={link.logo} size="large" />
                        </a>
                    </div>
                </IonCol>
            ))}
        </IonRow>
    )
}

const Icon = styled(IonIcon)`
    text-decoration: none;
    color: white;
    pointer-events: none;
`

export default ContactLinks
