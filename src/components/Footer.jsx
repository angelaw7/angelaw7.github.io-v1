import React from 'react'
import { IonIcon } from '@ionic/react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components';
import { chevronUp } from 'ionicons/icons'

const Footer = () => {
    return (
        <div>
            <UpBtn>
                <Link href="#title">
                    <Icon size="large" icon={chevronUp} />
                </Link>
            </UpBtn>
            <Copyright>&copy; Angela Wang 2021</Copyright>
        </div >
    )
}

const Link = styled(AnchorLink)`
  text-decoration: none;
`

const Icon = styled(IonIcon)`
    margin-top: 3.5px;
    margin-left: 4.5px;
`

const UpBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border-color: #9DD6FF;
  border-width: 25px;
  margin: auto;
  margin-top: 6vh;
  margin-bottom: 4vh;
 &:hover {
    background-color: #b7b1f1;
  }
`

const Copyright = styled.p`
    text-align: center;
    margin-bottom: 4vh;
`

export default Footer
