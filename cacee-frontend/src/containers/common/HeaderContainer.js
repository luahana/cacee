import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { openMenu, closeMenu } from '../../modules/bag';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user }));
  const { isMenuOpen } = useSelector(({ bag: { isMenuOpen } }) => ({
    isMenuOpen,
  }));

  const onMenuClick = () => {
    dispatch(openMenu());
  };

  const onCloseMenu = () => {
    dispatch(closeMenu());
  };
  return (
    <Header
      user={user}
      isMenuOpen={isMenuOpen}
      onMenuClick={onMenuClick}
      onCloseMenu={onCloseMenu}
    />
  );
};

export default HeaderContainer;
