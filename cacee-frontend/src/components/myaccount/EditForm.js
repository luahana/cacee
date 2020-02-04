import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
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

const ButtonWithMarginTop = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const EditForm = ({
  email,
  firstname,
  lastname,
  onChange,
  onSubmit,
  error,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>First Name:</div>
        <StyledInput
          autoComplete="firstname"
          name="firstname"
          onChange={onChange}
          value={firstname}
          // required
        />
        <div>Last Name:</div>
        <StyledInput
          autoComplete="lastname"
          name="lastname"
          onChange={onChange}
          value={lastname}
          // required
        />
        <div>Email:</div>
        <StyledInput
          autoComplete="email"
          name="email"
          type="email"
          value={email}
          readonly
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth>Save</ButtonWithMarginTop>
      </form>
    </>
  );
};

export default EditForm;
