import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import Github from './ContactButtons/Github';
import Linkedin from './ContactButtons/Linkedin';
import Medium from './ContactButtons/Medium';
import Hashnode from './ContactButtons/Hashnode';
import Youtube from './ContactButtons/Youtube';
import Instagram from './ContactButtons/Instagram';
import Twitter from './ContactButtons/Twitter';
import Gmail from './ContactButtons/Gmail';
import Pypi from './ContactButtons/Pypi';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  .socialContianer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdEmail />}
              text="gautamsingh1997@gmail.com"
            />
            <ContactInfoItem text="Raipur(CG), India" />
            <div className="socialContianer">
              <Gmail />
              <Github />
              <Pypi />
              <Linkedin />
              <Hashnode />
              <Medium />
              <Youtube />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
