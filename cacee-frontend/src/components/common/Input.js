import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const InputBlock = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  &:focus + span {
    left: 1rem;
    top: 0.2rem;
    font-size: 1rem;
    opacity: 1;
  }

  ${props =>
    !props.empty &&
    css`
      &:not(:focus) + span {
        left: 1rem;
        top: 0.2rem;
        font-size: 1rem;
        opacity: 1;
      }
    `}
`;

const StyledSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 1rem;
  transition: 0.2s ease all;
`;

const Input = ({ name, value, placeholder, required }) => {
  return (
    <>
      <InputBlock>
        <StyledInput
          name={name}
          value={value}
          empty={!value}
          required={required}
        />
        <StyledSpan>{placeholder}</StyledSpan>
      </InputBlock>
    </>
  );
};
export default Input;
