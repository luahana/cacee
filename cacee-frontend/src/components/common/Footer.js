import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import Button from './Button';
import palette from '../../lib/styles/palette';
import instagram from '../../images/instagram.jpg';
import facebook from '../../images/facebook.png';
import pinterest from '../../images/pinterest.png';
import twitter from '../../images/twitter.jpg';

const FooterBlock = styled.div`
  width: 100%;
  background: white;
  border-bottom: 0px;
  box-shadow: 0px -2px 4px -2px rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Wrapper = styled(Responsive)`
  height: 10rem;
  display: flex;
  align-items: flex-start;
`;

const MenuBlockContainer = styled.div`
  display: flex;
  flex-basis: 70%;
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const KeepInTouchBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
`;

const MenuLink = styled(Link)`
  margin-top: 15px;
  cursor: pointer;
`;

const MenuTitle = styled.div`
  h3 {
    text-decoration: underline;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
  margin: 20px 0px;
`;

const SNSContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const MarginTopDiv = styled.div`
  margin-top: 5px;
`;

const StyledButton = styled(Button)`
  width: 50%;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Wrapper>
          <MenuBlockContainer>
            <MenuBlock>
              <MenuTitle>
                <h3>Company</h3>
              </MenuTitle>
              <MenuLink to="/about">About Us</MenuLink>
              <MenuLink to="/">Career</MenuLink>
            </MenuBlock>
            <MenuBlock>
              <MenuTitle>
                <h3>Support</h3>
              </MenuTitle>
              <MenuLink to="/about">FAQ</MenuLink>
              <MenuLink to="/">Ring Sizer</MenuLink>
              <MenuLink to="/">Track Package</MenuLink>
              <MenuLink to="/">Shipping and Return</MenuLink>
              <MenuLink to="/">Contact</MenuLink>
            </MenuBlock>
          </MenuBlockContainer>
          <KeepInTouchBlock>
            <h3>Keep in touch</h3>
            From Tiffany Be the first to know about exciting new designs
            <StyledInput name="email" placeholder="Your Email" />
            <StyledButton>Sign Up</StyledButton>
            <SNSContainer>
              <img src={facebook} height="50px" width="50px"></img>
              <img src={instagram} height="50px" width="50px"></img>
              <MarginTopDiv>
                <img src={pinterest} height="40px" width="40px"></img>
              </MarginTopDiv>
              <MarginTopDiv>
                <img src={twitter} height="40px" width="40px"></img>
              </MarginTopDiv>
            </SNSContainer>
          </KeepInTouchBlock>
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;
