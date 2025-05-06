import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience in Javascript.Developed dynamic and user-friendly web
      interfaces using frameworks like React.js and Next.js.
    </SectionText>
    <List>
      <ListItem>
        <SiHtml5 size={"4rem"} />
        <ListContainer>
          <ListParagraph>HTML</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCss3 size={"4rem"} />
        <ListContainer>
          <ListParagraph>CSS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJavascript size={"4rem"} />
        <ListContainer>
          <ListParagraph>Javascript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiStyledcomponents size={"4rem"} />
        <ListContainer>
          <ListParagraph>Styled<br/>components</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size={"4rem"} />
        <ListContainer>
          <ListParagraph>
            Tailwind <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGithub size={"4rem"} />
        <ListContainer>
          <ListParagraph>GitHub</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiReact size={"4rem"} />
        <ListContainer>
          <ListParagraph>React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFirebase size={"4rem"} />
        <ListContainer>
          <ListParagraph>Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
