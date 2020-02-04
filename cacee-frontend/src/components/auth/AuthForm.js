import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
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
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: ${palette.gray[6]};
    text-decoration: none;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
  h3 {
    margin-top: 2rem;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
  h4 {
    letter-spacing: 1px;
  }
`;

const DivWithMarginTop = styled.div`
  margin-top: 1rem;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const textMap = {
  login: 'Login',
  register: 'Create Account',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        {type === 'register' && (
          <StyledInput
            autoComplete="firstname"
            name="firstname"
            placeholder="First Name"
            onChange={onChange}
            value={form.firstname}
            // required
          />
        )}
        {type === 'register' && (
          <StyledInput
            autoComplete="lastname"
            name="lastname"
            placeholder="Last Name"
            onChange={onChange}
            value={form.lastname}
            // required
          />
        )}
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={onChange}
          value={form.email}
          // required
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange}
          value={form.password}
          // required
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
            // required
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>
      </form>
      <Footer>
        <DivWithMarginTop>
          {type === 'login' ? (
            <Link to="/register">Create account</Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </DivWithMarginTop>
        {type === 'login' && (
          <DivWithMarginTop>
            <Link to="/forgotPassword">Forgot your password?</Link>
          </DivWithMarginTop>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
