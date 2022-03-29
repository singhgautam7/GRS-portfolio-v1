import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ResumeStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const canvaHtml = `<div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
    padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: -0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE8YL789Is&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`;
  return (
    <>
      <ResumeStyle>
        <div dangerouslySetInnerHTML={{ __html: canvaHtml }} />
        {/* <iframe
          title="GRS Resume"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            border: 'none',
            padding: '0',
            margin: '0',
          }}
          loading="lazy"
          src="https://www.canva.com/design/DAE8Ry2lwTc/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        /> */}
      </ResumeStyle>
    </>
  );
}
