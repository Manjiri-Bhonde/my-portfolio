import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  PortfolioSpan,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" />
        <PortfolioSpan>Manjiri Bhonde</PortfolioSpan>
      </Link>
    </Div1>
    <Div2>
      <div>
        <Link legacyBehavior href="#projects">
          {/* <a> */}
            <NavLink>Projects</NavLink>
          {/* </a> */}
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </div>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Manjiri-Bhonde">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/manjiri-bhonde/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://github.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
