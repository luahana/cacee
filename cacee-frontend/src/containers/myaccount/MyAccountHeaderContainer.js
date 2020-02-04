import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountHeader from '../../components/myaccount/AccountHeader';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { displayname } = useSelector(({ user }) => ({
    displayname: user.displayname,
  }));
  const onSignout = () => {
    dispatch(logout());
  };

  return <AccountHeader displayname={displayname} onSignout={onSignout} />;
};

export default HeaderContainer;
