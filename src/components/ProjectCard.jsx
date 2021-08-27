import React from 'react'
import { IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol } from '@ionic/react';
import styled from 'styled-components';

const ProjectCard = ({ title, img, desc, link }) => {
    const handleClick = (link) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <IonCol style={{ maxWidth: "25vw", minWidth: "20vw", cursor: "pointer" }}>
            <Card onClick={() => handleClick(link)}>
                <IonCardHeader>
                    <IonCardTitle>{title}</IonCardTitle>
                </IonCardHeader>
                <Image style={{ padding: '0px 15px' }} src={img} />
                <IonCardContent>
                    {desc}
                </IonCardContent>
            </Card>
        </IonCol>
    )
}

const Image = styled(IonImg)`
    padding: 0px 15px;
`

const Card = styled(IonCard)`
    &:hover {
        background-color: #fff4f4;
    }    
`

export default ProjectCard
