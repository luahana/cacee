import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import BagIcon from '../bag-icon/BagIcon';
import BagMenuContainer from '../../containers/bagMenu/BagMenuContainer';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 20;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  padding-bottom: 2rem;
  .logo {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.8rem;
  }
`;

const LogoBlock = styled(Link)`
  width: 20%;
`;

const OptionsBlockLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const OptionsBlockRight = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  margin: 0rem 0.7rem;
  cursor: pointer;
`;

const OptionImg = styled.div`
  margin: 0rem 0.7rem;
  cursor: pointer;
`;

const OptionDropDown = styled.div`
  margin: 0rem 0.7rem;
  overflow: hidden;

  .dropbtn {
    cursor: pointer;
    font-size: 16px;
    border: none;
    outline: none;
    margin: 0;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 15rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    font-size: 0.8rem;
    float: none;
    color: black;
    padding: 0.5rem 2rem;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  :hover .dropdown-content {
    display: block;
  }
`;

const Spacer = styled.div`
  height: 5rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, isMenuOpen, onMenuClick, onCloseMenu }) => {
  console.log(user);
  const { displayname, email } = user;
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <LogoBlock to="/">
            <div className="logo">CACEE</div>
          </LogoBlock>
          <OptionsBlockRight>
            <OptionDropDown>
              <Link className="dropbtn" to="/collections/all">
                SHOP <i className="fa fa-caret-down fa-sm"></i>
              </Link>
              <div className="dropdown-content">
                <Link to="/">BEST SELLERS</Link>
                <Link to="/">NEW RELEASES</Link>
                <Link to="/collections/rings">RINGS</Link>
                <Link to="/collections/earrings">EARRINGS</Link>
                <Link to="/collections/necklaces">NECKLACES</Link>
                <Link to="/collections/bracelets">BRACELETS</Link>
              </div>
            </OptionDropDown>
            <OptionLink to="/about">ABOUT</OptionLink>
            {email && displayname ? (
              <OptionLink to="/myaccount/editaccount">
                {displayname[0].toUpperCase() + displayname.slice(1)}'s ACCOUNT
              </OptionLink>
            ) : (
              <OptionLink to="/login">MY ACCOUNT</OptionLink>
            )}
            <OptionLink to="/">
              <i className="fa fa-search fa-lg"></i>
            </OptionLink>
            <OptionImg>
              <BagIcon onClick={onMenuClick} />
            </OptionImg>
          </OptionsBlockRight>
          <BagMenuContainer isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} />
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
