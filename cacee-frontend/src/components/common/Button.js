import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: 1px solid;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  cursor: pointer;

  background: black;
  &:hover {
    background: white;
    color: black;
  }

  ${props =>
    props.checkoutBtn &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
      font-size: 1rem;
    `}

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${props =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}

  ${props =>
    props.googleSignIn &&
    css`
    background-color: #4285f4
    color: white;
    width: 35%;

    &:hover {
      background-color: #357ae8;
      color: white;
    }
  `}

  ${props =>
    props.facebookSignIn &&
    css`
    background-color: #3B5998
    color: white;
    width: 35%;

    &:hover {
      background-color: #8b9dc3;
      color: white
    }
  `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
