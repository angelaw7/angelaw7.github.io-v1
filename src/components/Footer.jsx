import React from 'react'
import { IonIcon } from '@ionic/react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components';
import { chevronUp } from 'ionicons/icons'

const Footer = () => {
    return (
        <div>
            <UpBtn onClick={() => console.log('up')}>
                <Link href="#title">
                    <IonIcon style={{ marginTop: 6, marginLeft: 4.5 }} size="large" icon={chevronUp} />
                </Link>
            </UpBtn>
        </div >
    )
}

const Link = styled(AnchorLink)`
  text-decoration: none;
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
  margin-bottom: 6vh;
`

export default Footer
