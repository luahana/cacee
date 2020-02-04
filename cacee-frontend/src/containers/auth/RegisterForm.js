import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, email } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    email: user.email,
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { firstname, lastname, email, password, passwordConfirm } = form;

    if ([firstname, lastname, email, password, passwordConfirm].includes('')) {
      setError('all fields are required');
      return;
    }
    if (password !== passwordConfirm) {
      setError('passwords do not match');
      changeField({ form: 'register', key: 'password', value: '' });
      changeField({ form: 'register', key: 'passwordConfirm', value: '' });
      return;
    }
    dispatch(register({ firstname, lastname, email, password }));
  };

  //initialize the form when the component is rendered for the first time
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('email already exists');
        return;
      }
      setError('fail to register');
      return;
    }
    if (auth) {
      console.log('register success');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (email) {
      history.push('/');
      try {
        localStorage.setItem('email', JSON.stringify(email));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, email]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
