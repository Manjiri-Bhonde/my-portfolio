import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row='true' nopadding='true'>
    <LeftSection>
      <SectionTitle main='true' center='true'>
        Hi, I&apos;m<br />
       Manjiri
      </SectionTitle>
      <SectionText>
        Dedicated React developer crafting dynamic, responsive web applications
        and passionate about crafting exceptional user experiences.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
