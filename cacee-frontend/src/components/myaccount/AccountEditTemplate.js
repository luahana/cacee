import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import tiffanyaccount from '../../images/tiffanyaccount.jpg';

const AccountTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  width: 400px;
  min-height: 500px;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem;
`;

const AccountEditTemplate = ({ children }) => {
  return (
    <Wrapper>
      <AccountTemplateBlock>{children}</AccountTemplateBlock>
      <img src={tiffanyaccount} width="50%"></img>
    </Wrapper>
  );
};

export default AccountEditTemplate;
