import './App.css';
import { MainBox } from './Styled-component/Main.styled';
import { useState } from 'react';
import React from 'react';
import Menu from './Components/Menu';
import { ThemeContext } from 'styled-components';
import Main from './Components/Main';

// const ThemeContext = React.createContext<string>('');

function App() {

  const [myTheme, setMyTheme] = useState('Light');

  const switchTheme = () => {
    if (myTheme === "Light") {
      setMyTheme('Dark');
    } else {
      setMyTheme('Light');
    }
  };
  
  return (
    <ThemeContext.Provider value={myTheme}>
      <MainBox theme={myTheme}>
        <button onClick={switchTheme}>click</button>
        <Menu/>
        <Main/>
      </MainBox>
    </ThemeContext.Provider>
      
  );
}

export default App;
