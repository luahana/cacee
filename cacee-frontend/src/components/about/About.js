import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';

const AboutBlock = styled.div`
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60%;
  margin: 100px;
  line-height: 30pt;
`;

const About = () => {
  return (
    <>
      <AboutBlock>
        <Wrapper>
          <StyledParagraph>
            <h2>FROM MEJURI We’re CACEE </h2>
            <p>The new luxury.</p>
            <p>
              History says fine jewelry for occasions, we say fine jewelry for
              every day. Minus the traditional markups, with new,
              limited-edition drops every Monday of the year. Handcrafted like
              the olden days, but designed for the golden days ahead.
            </p>
            <p>So forget occasions. </p>
            <p>Here’s to fine jewelry for me.</p>
          </StyledParagraph>
        </Wrapper>
      </AboutBlock>
    </>
  );
};

export default About;
