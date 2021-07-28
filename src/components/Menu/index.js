import { useState } from "react";

import styled from "styled-components";

import { CgNotes } from "react-icons/cg";

import { useConfigs } from "../../context/contextProvider";

function Menu() {
    const { OpenAndCloseEditor } = useConfigs();
    const [widthMenu, setWidthMenu] = useState(true);

    const Button = styled.button`
        padding: 0.8rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.2);
        color: white;
        margin-bottom: 1rem;
        border-radius: 1rem;
        width: 100%;
    `;

    const Container = styled.div`
        background-color: white;
        padding: 0.6rem;
        border-radius: 1rem;
        backdrop-filter: blur(4px) saturate(100%);
        -webkit-backdrop-filter: blur(4px) saturate(100%);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        box-shadow: 3px 5px 10px -7px black;
        margin-right: 2rem;

        transition: width 4s ease-in-out 1s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: ${widthMenu}%;

        #buttons-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    `;

    return (
        <Container className="">
            <div id="buttons-menu">
                <p>LOGO</p>
                <Button>Repos</Button>
                <Button onMouseEnter={() => setWidthMenu(100)} onMouseLeave={() => setWidthMenu(10)}>
                    Profiles
                </Button>
                <Button>Componentes</Button>
                <Button>Comunity</Button>
            </div>

            <Button onClick={OpenAndCloseEditor}>
                <CgNotes size={20} color="white" />
            </Button>
        </Container>
    );
}

export default Menu;
