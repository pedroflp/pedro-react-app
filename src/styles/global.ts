import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter';
  font-weight: 400;

  scroll-behavior: smooth;
  -webkit-user-drag: none;
  outline: none !important;
}

:root {
  --main: ${props => props.theme.colors.main};
  --mainLight: ${props => props.theme.colors.mainLight};
  --secundary: ${props => props.theme.colors.secundary};
  --text: ${props => props.theme.colors.text};
  --background: ${props => props.theme.colors.background};
  --cardBackground: ${props => props.theme.colors.cardBackground};
  --cardBackgroundDarker: ${props => props.theme.colors.cardBackgroundDarker};
  --shadowColor: ${props => props.theme.colors.shadowColor};
  --popupBackground: ${props => props.theme.colors.popupBackground};
}

body {
  background: var(--background);
  color: var(--text);
  
  margin: 0;
  padding: 0;  

  overflow-x: hidden;
}

h1, h2 {
  letter-spacing: -1.5px;
}

strong { 
  font-weight: 700;
  color: var(--main);
}

button {
  cursor: pointer;
}

::selection { 
  background: rgba(100, 48, 212, 0.3);
}

::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--main);
  border-radius: 50px;
  
}


.global-tooltip {
  backdrop-filter: blur(5px) !important;
  padding: 1rem 2rem !important;
  font-size: 0.9rem !important;
  font-weight: 600;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}

`;