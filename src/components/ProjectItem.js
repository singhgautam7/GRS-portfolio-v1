import React from 'react';
import styled from 'styled-components';
import ProjectLinks from './ProjectLinks';
import ProjectDuration from './ProjectDuration';
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
import Gcloud from './ProjectTags/GCloud';
import Flask from './ProjectTags/Flask';
import { keys } from '../keys';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__links {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .projectItem__lang {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 0.8rem;
    gap: 0.8rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .projectItem__links {
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

export default function ProjectItem({
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  duration = '',
  langs = [],
  repository = '',
  live = '',
}) {
  return (
    <ProjectItemStyles>
      {/* <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link> */}
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <ProjectDuration duration={duration} />
        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__links">
          {repository !== '' && (
            <ProjectLinks title="Source Code" link={repository} />
          )}
          {live !== '' && (
            <ProjectLinks title="Working Demo" link={live} outline />
          )}
        </div>
      </div>
      <div className="projectItem__lang">
        {langs.indexOf(keys.KeyDjango) >= 0 && <Django />}
        {langs.indexOf(keys.KeyVue) >= 0 && <Vue />}
        {langs.indexOf(keys.KeyHTML) >= 0 && <Html />}
        {langs.indexOf(keys.KeyCSS) >= 0 && <Css />}
        {langs.indexOf(keys.KeyJs) >= 0 && <Javascript />}
        {langs.indexOf(keys.KeyReact) >= 0 && <ReactTag />}
        {langs.indexOf(keys.KeyAndroid) >= 0 && <Android />}
        {langs.indexOf(keys.KeyTerraform) >= 0 && <Terraform />}
        {langs.indexOf(keys.KeyPython) >= 0 && <Python />}
        {langs.indexOf(keys.KeyJava) >= 0 && <Java />}
        {langs.indexOf(keys.KeyGCloud) >= 0 && <Gcloud />}
        {langs.indexOf(keys.KeyFlask) >= 0 && <Flask />}
      </div>
    </ProjectItemStyles>
  );
}
