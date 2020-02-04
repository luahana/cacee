import React from 'react';
import MainContainer from '../../containers/home/MainContainer';
import BrowseContainer from '../../containers/home/BrowseContainer';
import SubmainContainer from '../../containers/home/SubmainContainer';

const HomePage = () => {
  return (
    <>
      <MainContainer />
      <BrowseContainer />
      <SubmainContainer />
    </>
  );
};

export default HomePage;
