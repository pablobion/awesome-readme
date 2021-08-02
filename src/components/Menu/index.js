import { useState, useEffect } from "react";

import styled from "styled-components";

import { CgNotes } from "react-icons/cg";

import { useConfigs } from "../../context/contextProvider";

function Menu() {
    const { OpenAndCloseEditor } = useConfigs();

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
        height: 97.5vh;
        display: flex;
    `;

    const Menu = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 0.6rem;
        border-radius: 1rem;
        backdrop-filter: blur(4px) saturate(100%);
        -webkit-backdrop-filter: blur(4px) saturate(100%);
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 3px 5px 10px -7px black;
        height: 100%;

        #buttons-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    `;
    const Submenu = styled.div`
        width: 10px;
        visibility: hidden;
        transition: all 0.3s;
        border-radius: 1rem;
        backdrop-filter: blur(4px) saturate(100%);
        -webkit-backdrop-filter: blur(4px) saturate(100%);
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 3px 5px 10px -7px black;

        &&.up {
            width: 500px;
            visibility: visible;
            margin: 0rem 1rem;
        }
    `;

    useEffect(() => {
        var box = document.getElementById("box");
        var submenu = document.getElementById("submenu");

        box.addEventListener("mouseenter", function () {
            submenu.classList.add("up");
        });

        submenu.addEventListener("mouseleave", function () {
            submenu.classList.remove("up");
        });
    });

    return (
        <Container className="">
            <Menu>
                <div id="buttons-menu">
                    <p>LOGO</p>
                    <Button>Repos</Button>
                    <Button>Profiles</Button>
                    <Button>Componentes</Button>
                    <Button id="box">Comunity</Button>
                </div>

                <Button onClick={OpenAndCloseEditor}>
                    <CgNotes size={20} color="white" />
                </Button>
            </Menu>
            <Submenu id="submenu">asas</Submenu>
        </Container>
    );
}

export default Menu;
