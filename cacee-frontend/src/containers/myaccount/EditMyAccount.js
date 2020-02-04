import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, edit } from '../../modules/user';
import EditForm from '../../components/myaccount/EditForm';

const EditMyAccount = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { firstname, lastname, email } = useSelector(({ user }) => ({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = async e => {
    e.preventDefault();

    if ([firstname, lastname].includes('')) {
      setError('all fields are required');
      return;
    }
    dispatch(edit({ firstname, lastname, email }));
  };

  // useEffect(() => {
  //   if (authError) {
  //     if (authError.response.status === 409) {
  //       setError('email already exists');
  //       return;
  //     }
  //     setError('fail to register');
  //     return;
  //   }
  //   if (auth) {
  //     console.log('register success');
  //     console.log(auth);
  //     dispatch(check());
  //   }
  // }, [auth, authError, dispatch]);

  return (
    <>
      <EditForm
        email={email}
        firstname={firstname}
        lastname={lastname}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default EditMyAccount;
