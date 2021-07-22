import React from 'react'
import styled from 'styled-components'

export const AboutMe: React.FC = () => (
  <StyledAboutSection className="about hidden" id="about">
    <h2 className="heading hidden">ABOUT ME</h2>
    <p className="about-text hidden">
      I am a freelance web designer/developer based in Tokyo.<br />
    </p>
    <p className="about-text hidden">
      I specialize in UI/UX and interaction design<br />
      both on web and on-site installation.<br />
      I also make IoT products using Raspberry Pi, Arduino, etc.
    </p>
  </StyledAboutSection>
)

const StyledAboutSection = styled.div`
  padding: 80px 30px;
  background-color: #fff;
  color: #333;
  font-size: 24px;
  .about-text {
    margin: 30px 0;
    font-size: 20px;
    line-height: 2.5;
  }
`;

