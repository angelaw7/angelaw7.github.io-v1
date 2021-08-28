import React from 'react'
import { IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonText, IonCardSubtitle } from '@ionic/react';
import styled from 'styled-components';

const ProjectCard = ({ title, img, desc, website, repo }) => {

    return (
        <IonCol style={{ maxWidth: "350px", cursor: "pointer" }}>
            <Card >
                <Header >
                    <Title >{title}</Title>
                </Header>
                <Image style={{ padding: '0px 15px' }} src={img} />
                <IonCardContent>
                    <IonText>
                        {desc}
                    </IonText>
                    <Links >
                        {website ? <Link href={website} target="_blank" rel="noreferrer">Visit the Website</Link> : ""}
                        {repo ? <Link href={repo} target="_blank" rel="noreferrer">GitHub Repo</Link> : ""}
                    </Links>
                </IonCardContent>
            </Card>
        </IonCol>
    )
}

const Link = styled.a`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Links = styled(IonCardSubtitle)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
`

const Image = styled(IonImg)`
    padding: 0px 15px;
`

const Card = styled(IonCard)`
    cursor: default;
`

const Header = styled(IonCardHeader)`
    background-color: #ce5076;
`

const Title = styled(IonCardTitle)`
    color: white;
    padding: 6px;
    font-size: 20px;
    font-weight: bold;
`

export default ProjectCard
