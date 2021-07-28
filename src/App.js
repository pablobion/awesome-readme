import MdEditor2 from "./components/uidMdEditor/index";
import Menu from "./components/Menu/index";
import Home from "./pages/home/index";

//pages
import Start from "./pages/Start/index";

import styled from "styled-components";

import background from "./assets/background3.jpg";

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 1rem;
    overflow: hidden;
`;

function App() {
    return (
        <Container>
            <Menu />
            <Home />
            <MdEditor2 />
            {/* <Start /> */}
        </Container>
    );
}

export default App;
