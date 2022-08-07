import React from "react";
import { IonCol, IonRow } from "@ionic/react";
import PageContainer from "../components/PageContainer";

const About = () => {
  return (
    <div id="about">
      <PageContainer>
        <h1>About</h1>
        <IonRow>
          <IonCol
            size-sm={12}
            size-md={12}
            size-lg={8}
            style={{ paddingRight: "40px" }}
          >
            <p>
              Hello and welcome to my page! My name is Angela Wang and I’m a
              Software & Biomedical Engineering student at McMaster University,
              in Hamilton, Ontario. I’m passionate about healthcare and
              technology, and I hope to one day apply my technical skills to
              develop innovate biomedical devices and software.
              <br />
              <br />
              When I’m not in front of a computer screen, I like to go swimming,
              rock climbing, or hiking. I also enjoy building random
              things using software or hardware, digitally drawing, and learning
              fun facts about human anatomy. In the future, I wish to travel
              more to experience different cultures and lifestyles, to admire
              scenery, and to try new food!
              <br />
              <br />
            </p>
          </IonCol>
          <IonCol size-lg={4}>
            <iframe
              title="codeBlock"
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fjson&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=15px&lh=151%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2522name%2522%253A%2520%2522Angela%2520Wang%2522%252C%250A%2520%2522location%2522%253A%2520%2522Toronto%252C%2520Ontario%2522%252C%250A%2520%2522interests%2522%253A%2520%255B%2522Machine%2520Learning%2522%252C%250A%2509%2522Biotechnology%2522%252C%2520%2522DevOps%2522%252C%250A%2509%2522Software%2520Development%2522%255D%250A%2520%257D"
              style={{
                width: "385px",
                height: "201px",
                border: 0,
                transform: "scale(1)",
                overflow: "hidden",
                margin: "auto",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </IonCol>
        </IonRow>
      </PageContainer>
    </div>
  );
};

export default About;
