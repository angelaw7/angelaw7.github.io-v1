import React from 'react'
import { IonIcon } from '@ionic/react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components'
import background from "../imgs/bgimg.png"
import { chevronDown } from 'ionicons/icons'

const Title = () => {
  return (
    <div id="title">
      <BgImg>
        <TextContainer>
          <NameTitle>
            Hi!<br />I'm <Blue>Angela</Blue>
          </NameTitle>
          <SubHeading>Software & Biomedical Engineering Student</SubHeading>
          <LinkContainer>
            <Link href="#about"><LinkText>/about</LinkText></Link>
            <Link href="#experience"><LinkText>/experience</LinkText></Link>
            <Link href="#projects"><LinkText>/projects</LinkText></Link>
            <Link href="#skills"><LinkText>/skills</LinkText></Link>
            <Link href="#contact"><LinkText>/contact</LinkText></Link>
          </LinkContainer>
        </TextContainer>
        <DownBtn>
          <Link href="#about">
            <IonIcon style={{ marginTop: 6, marginLeft: 4.5 }} size="large" icon={chevronDown} />
          </Link>
        </DownBtn>
      </BgImg>
    </div>
  )
}

const BgImg = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${background});
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
  font-weight: bold;
`

const Blue = styled.span`
  color: #9DD6FF;
`

const SubHeading = styled.p`
  color: white;
  font-size: 18px;
`

const LinkText = styled(SubHeading)`
&:hover {
    color: #b7b1f1;
  }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
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
  &:hover {
    background-color: #b7b1f1;
  }
`

const Link = styled(AnchorLink)`
  text-decoration: none;
`

export default Title
