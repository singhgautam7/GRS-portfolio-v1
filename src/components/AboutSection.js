import React from 'react';
import styled from 'styled-components';
import * as icons from 'react-icons/md';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import SolutionSectionItem from './SolutionSectionItem';
import Android from './ProjectTags/Android';
import Css from './ProjectTags/Css';
import Django from './ProjectTags/Django';
import Html from './ProjectTags/Html';
import Javascript from './ProjectTags/Javascript';
import Python from './ProjectTags/Python';
import ReactTag from './ProjectTags/ReactTag';
import Terraform from './ProjectTags/Terraform';
import Vue from './ProjectTags/Vue';
import Java from './ProjectTags/Java';
import GCloud from './ProjectTags/GCloud';
import Ubuntu from './ProjectTags/Ubuntu';
import Flask from './ProjectTags/Flask';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 0.8rem;
    gap: 0.8rem;
    flex-basis: 60%;
    flex-grow: 0;
  }
  .aboutSection__right {
    display: flex;
    flex-directtion: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 0.8rem;
    gap: 0.8rem;
    flex-basis: 40%;
    flex-grow: 0;
  }
  .aboutSection__highlights,
  .aboutSection__skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.8rem;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    padding: 0 0.5rem;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 5rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin-top: 2rem;
      padding: 0 0.5rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a Google Certified Professional Data Engineer from India. I
            also create websites with secure and robust backend. I love keeping
            myself physically fit and I skill up my technological game by
            learning/sharpening various languages.
          </PText>
          <div className="aboutSection__buttons">
            <Button
              btnText="Download CV"
              btnLink="https://github.com/singhgautam7/singhgautam7/raw/main/assets/GRS_resume_dark.pdf"
            />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <PText>
            My <strong>SKILLSET</strong> includes
          </PText>
          <div className="aboutSection__skills">
            <Python />
            <GCloud />
            <Django />
            <Flask />
            <ReactTag />
            <Terraform />
            <Vue />
            <Ubuntu />
            <Javascript />
            <Html />
            <Css />
            <Java />
            <Android />
          </div>
          <PText>
            I build <strong>SOLUTIONS</strong> which are
          </PText>
          <div className="aboutSection__highlights">
            <SolutionSectionItem
              icon={<icons.MdFlightTakeoff />}
              title="Scalable"
            />
            <SolutionSectionItem
              icon={<icons.MdViewModule />}
              title="Modular"
            />
            <SolutionSectionItem icon={<icons.MdSpeed />} title="Fast" />
            <SolutionSectionItem icon={<icons.MdThumbUp />} title="Reliable" />
            <SolutionSectionItem icon={<icons.MdSecurity />} title="Secure" />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
