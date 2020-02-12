import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  width: 45%;
  padding: 1.5rem;
  padding: 2rem;
  margin: 3rem;
  margin-left: 6rem;
  border: solid 1px black;
`;

const HeaderBlock = styled.div`
  padding-bottom: 1rem;
  border-bottom: solid 1px black;
`;

const DeliveryTemplate = () => {
  return (
    <>
      <TemplateBlock>
        <HeaderBlock>02 DELIVERY</HeaderBlock>
      </TemplateBlock>
    </>
  );
};

export default DeliveryTemplate;
