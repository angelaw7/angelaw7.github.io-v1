import { IonButton, IonIcon } from '@ionic/react'
import React from 'react'
import styled from 'styled-components'
import background from "../imgs/bgimg.png"
import { chevronDown } from 'ionicons/icons'
import AnchorLink from "react-anchor-link-smooth-scroll";

const BgImg = styled.div`
background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ),url(${background});
background-size: cover;
min-height: 100vh;
background-repeat: no-repeat;
`

const TextContainer = styled.div`
margin: auto;
width: 50%;
margin-bottom: 40px;
`

const NameTitle = styled.h1`
margin: auto;
color: white;
padding-top: 30vh;
font-family: 'Viga', sans-serif;
font-size: 60px;
`

const Blue = styled.span`
color: #9DD6FF;
`

const SubHeading = styled.p`
color: white;
font-size: 18px;
`

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 300px;
`

const DownBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border-color: #9DD6FF;
  border-width: 25px;
  margin: auto;
  justify-content: bottom;
  margin-top: 20vh;
`

const Link = styled(AnchorLink)`
  text-decoration: none;
`

const Title = () => {
  return (
    <BgImg>
      <TextContainer>
        <NameTitle>
          Hi!<br />I'm <Blue>Angela</Blue>
        </NameTitle>
        <SubHeading>Software & Biomedical Engineering Student</SubHeading>
        <LinkContainer>
          <Link href="#about"><SubHeading>/about</SubHeading></Link>
          <Link href="#skills"><SubHeading>/skills</SubHeading></Link>
          <Link href="#projects"><SubHeading>/projects</SubHeading></Link>
          <Link href="#contact"><SubHeading>/contact</SubHeading></Link>
        </LinkContainer>
      </TextContainer>
      <Link href="#about"><DownBtn onClick={() => console.log('down')}><IonIcon style={{ marginTop: 6, marginLeft: 4.5 }} size="large" icon={chevronDown} /></DownBtn></Link>
    </BgImg>
  )
}

export default Title