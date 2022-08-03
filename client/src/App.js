import styled from "styled-components"
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";

const Container = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`
const Main = styled.div`
  flex:7
`
const Wrapper = styled.div`

`

function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
          <Wrapper>
            test
          </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
