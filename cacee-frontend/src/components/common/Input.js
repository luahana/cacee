import React from 'react';
import styled, { css } from 'styled-components';

const InputBlock = styled.div`
  position: relative;
  margin-top: 0.5rem;
  width: 100%;
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

  &:focus {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

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

const Input = ({ name, value, placeholder, required, fullWidth }) => {
  return (
    <>
      <InputBlock>
        <StyledInput
          name={name}
          value={value}
          empty={!value}
          required={required}
          fullWidth={fullWidth}
        />
        <StyledSpan>{placeholder}</StyledSpan>
      </InputBlock>
    </>
  );
};
export default Input;
