import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: 'Kanit';
    }
    
    #root {
        width: 100%;
        height: 100%;
    }
`;

export const DashboardContainer = styled.div`
    background-color: #8d5fb3;
    color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 40px;
`;

export const DashboardTitle = styled.h1`
    font-size: 1.5em;
    margin: 0;
    color: white;
    font-weight: normal;
`

export const OptionsContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const DashboardLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    cursor: pointer;
    margin-left: 30px;

    &:hover {
        text-decoration: underline;
    }
`
export const ContentWrapper = styled.div`
    padding-top: 60px
    padding-left: 20px;
    padding-right: 20px;
    color: black;
`
;