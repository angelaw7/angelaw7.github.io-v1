import React from 'react'
import { IonImg, IonCard, IonCardTitle, IonCardContent, IonRow, IonText, IonCol, IonCardSubtitle } from '@ionic/react';
import styled from 'styled-components';

const ExperienceCard = ({ company, date, position, img, desc }) => {

    return (
        <IonRow style={{ cursor: "pointer" }}>
            <Card >
                <IonCol size={2}>
                    <Image src={img} />
                </IonCol>
                <IonCol>
                    <Title>
                        <span style={{ fontWeight: 'bold' }}>{position}</span> - {company}
                    </Title>
                    <IonCardSubtitle style={{paddingLeft: "16px", marginTop: "4px"}}>
                    {date}
                    </IonCardSubtitle>
                <IonCardContent>
                    <IonText>
                        {desc}
                    </IonText>
                </IonCardContent>
                </IonCol>
            </Card>
        </IonRow >
    )
}

const Image = styled(IonImg)`
    height: 140px;
    margin-left: 10px;
`

const Card = styled(IonCard)`
    display: flex;
    cursor: default;
    &:hover {
        background-color: #f2f6ff;
    }    
`

const Title = styled(IonCardTitle)`
    padding-top: 16px;
    padding-left: 16px;
    font-size: 20px;
`

export default ExperienceCard
