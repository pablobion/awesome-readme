import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    backdrop-filter: blur(4px) saturate(100%);
    -webkit-backdrop-filter: blur(4px) saturate(100%);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    box-shadow: 3px 5px 10px -7px black;

    #header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 2em;
        font-weight: bold;
        color: white;
    }
`;
