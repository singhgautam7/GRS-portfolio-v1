import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #000000;
    --gray-1: #BCB4B4;
    --deep-dark: #111111;
    --deep-dark-2: #0F0F0F;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --gray-3: #CC0000
  }
  // :root{
  //   --dark-bg: #ffffff;
  //   --gray-1: #434b4b;
  //   --deep-dark: #eeeeee;
  //   --deep-dark-2: #f0f0f0;
  //   --gray-2: #c9c9c9;
  //   --white : black;
  //   --black: white;
  //   --gray-3: #33ffff
  // }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
  @keyframes fadeInUp {
    from { 
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeIn {
    from { 
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export default GlobalStyles;
