import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [enteredSubject, setSubject] = useState('');
  const [enteredMessage, setMessage] = useState('');

  const emptyAllValues = () => {
    setSubject('');
    setMessage('');
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const submitHandler = (event) => {
    // Prevent reload
    event.preventDefault();

    const url = `mailto:gautamsingh1997@live.com?subject=${enteredSubject}&body=${enteredMessage}`;
    // Open mail:to
    openInNewTab(url);

    // Emtry all entered value
    emptyAllValues();
  };

  return (
    <>
      <FormStyle onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">
            Your Subject
            <input
              id="subject"
              name="subject"
              value={enteredSubject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your Message
            <textarea
              type="text"
              id="message"
              name="message"
              rows="3"
              value={enteredMessage}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send Mail</button>
      </FormStyle>
    </>
  );
}
