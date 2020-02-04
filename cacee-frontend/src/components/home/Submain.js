import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import TiffanySubMain from '../../images/tiffanySubMain.jpeg';

const Submain = () => {
  return (
    <>
      <Responsive>
        <img src={TiffanySubMain} width="100%"></img>
      </Responsive>
    </>
  );
};

export default Submain;
