import React from 'react';
import EditMyAccount from '../../containers/myaccount/EditMyAccount';
import MyAccountHeaderContainer from '../../containers/myaccount/MyAccountHeaderContainer';
import AccountEditTemplate from '../../components/myaccount/AccountEditTemplate';

const EditAccountPage = () => {
  return (
    <>
      <MyAccountHeaderContainer />
      <AccountEditTemplate>
        <EditMyAccount />
      </AccountEditTemplate>
    </>
  );
};

export default EditAccountPage;
