import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import TiffanyMain from '../../images/tiffanyMain.jpeg';

const Main = () => {
  return (
    <>
      <Responsive>
        <img src={TiffanyMain} width="100%"></img>
      </Responsive>
    </>
  );
};

export default Main;
