import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import tiffanyaccount from '../../images/tiffanyaccount.jpg';

const AccountTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0px;
  min-height: 500px;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem 0rem;
  width: 400px;
  background: red;
  border-redius: 2px;
`;

const OrderTemplate = ({ children }) => {
  return (
    <Wrapper>
      <AccountTemplateBlock>{children}</AccountTemplateBlock>
    </Wrapper>
  );
};

export default OrderTemplate;
