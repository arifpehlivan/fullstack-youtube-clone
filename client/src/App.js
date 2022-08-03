import { useState } from "react";
import styled, { ThemeProvider } from "styled-components"
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme.js";

const Container = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`
const Main = styled.div`
  flex:7;
  background: ${({ theme }) => theme.bg}; 
`
const Wrapper = styled.div`

`

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main>
          <Navbar />
          <Wrapper>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
