import React from 'react';
import styled from 'styled-components';
import PreImage from '../assets/images/pre.svg';

const PreLoaderStyle = styled.div`
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 300px;
    width: 90%;
    background-color: #000000;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default function Pre() {
  return (
    <PreLoaderStyle>
      <div className="preloader">
        <img src={PreImage} alt="loading" />
      </div>
      ;
    </PreLoaderStyle>
  );
}
