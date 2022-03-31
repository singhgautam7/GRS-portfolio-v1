import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.jpg';
import PText from './PText';
import Button from './Button';
import Type from './Animations/Type';

const HeroStyles = styled.div`
  .hero {
    margin: 4rem 0 0 0;
    padding: 0 8rem;
    height: 100vh;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 0.8rem;
    gap: 0.8rem;
    flex-basis: 60%;
    flex-grow: 0;
  }
  .hero__heading {
    font-size: 2rem;
    # margin-bottom: -4rem;
    margin-bottom: 1rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    display: flex;
    flex-basis: 40%;
    flex-grow: 0;
    max-width: 600px; # Originally 900px
    width: 100%;
    height: 500px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    filter: grayscale(90%);
    transition: 0.3s ease filter;
    &:hover, &:active {
      filter: grayscale(0%);
    }
  }
  .hero__info {
    padding-right: 5px;
  }

  .Typewriter__wrapper {
    font-size: 2.2em !important;
    color: var(--gray-1) !important;
    font-weight: 600 !important;
  }
  .Typewriter__cursor {
    font-size: 2.4em !important;
    color: var(--white) !important;
  }
  
  @media (max-width: 767px) {
  }

  @media only screen and (max-width: 768px) {
    .Typewriter__wrapper {
      font-size: 1.4em !important;
      font-weight: 500 !important;
      position: center !important;
      text-align: center;
    }
    .Typewriter__cursor {
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .hero {
      padding: 36rem 0 30rem 0;
      height: 100vh;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
      justify-content: center;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      .hero__name {
        font-size: 4.1rem;
      }
    }
    .hero__img {
      height: 400px;
      width: 90%;
      margin: 2rem 0 0 0;
    }
    .hero__info {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I am</span>
            <span className="hero__name">Gautam Singh</span>
            {/* <PText>Data Engineer</PText> */}
          </h1>
          <div className="hero__info">
            <Type />
            {/* <PText>Data Engineer / Full-Stack Developer / Python Expert</PText> */}
            <Button btnText="See my works" btnLink="/projects" />
          </div>
        </div>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </HeroStyles>
  );
}
