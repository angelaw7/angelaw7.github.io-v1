import React from 'react'
import styled from 'styled-components'
import background from "../imgs/bgimg.png"

const BgImg = styled.div`
background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ),url(${background});
background-size: cover;
min-height: 100vh;
background-repeat: no-repeat;
`

const TextContainer = styled.div`
margin: auto;
width: 50%;
`

const NameTitle = styled.h1`
margin: auto;
color: white;
padding-top: 30vh;
font-family: 'Viga', sans-serif;
font-size: 48px;
`

const Blue = styled.span`
color: #9DD6FF;
`

const SubHeading = styled.p`
color: white;
`

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 300px;
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
          <SubHeading>/about</SubHeading>
          <SubHeading>/projects</SubHeading>
          <SubHeading>/contact</SubHeading>
        </LinkContainer>
      </TextContainer>
    </BgImg>
  )
}

export default Title
