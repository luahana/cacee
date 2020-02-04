import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const AccountHeaderBlock = styled.div`
  width: 100%;
  background: white;
`;

const Wrapper = styled(Responsive)`
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem;
`;

const TopBlock = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
`;

const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const SignOutBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const NavBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const OptionLink = styled(Link)`
  margin: 10px 0px;
  margin-right: 25px;
  cursor: pointer;
`;

const SignoutLink = styled(OptionLink)`
  margin-right: 0px;
`;

const StyledHr = styled.hr`
  margin: 0px;
`;

const AccountHeader = ({ displayname, onSignout }) => {
  return (
    <>
      <AccountHeaderBlock>
        <Wrapper>
          <TopBlock>
            <WelcomeBlock>
              <div>
                Welcome, {displayname[0].toUpperCase() + displayname.slice(1)}
              </div>
              <div>
                <h1>Your Account</h1>
              </div>
            </WelcomeBlock>
            <SignOutBlock>
              <SignoutLink to="/" onClick={onSignout}>
                Sign Out >
              </SignoutLink>
            </SignOutBlock>
          </TopBlock>
          <NavBlock>
            <OptionLink to="/myaccount/editaccount">
              Personal Information
            </OptionLink>
            <OptionLink to="/myaccount/ordersummary">Orders</OptionLink>
            <OptionLink to="/myaccount/addressbook">Addresses</OptionLink>
          </NavBlock>
          <StyledHr />
        </Wrapper>
      </AccountHeaderBlock>
    </>
  );
};

export default AccountHeader;
