import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
    diplay: flex;
    flex-direction: column;
`;

export const Dropdown = styled.select`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #6a0dad;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #5a0cac;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const InputContainer = styled.div`
    margin: 10px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-size: 16px;
`;

export const InputField = styled.input`
    padding: 10px;
    font-size: 15px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #6a0dad;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #5a0ca3;
    }
`;

export const ResultContainer = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #6a0dad;
`;

export const CalculatorTabsWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    margin-top: 60px;
`;

export const CalculatorTabsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    background-color: white;
    border-bottom: 0px solid #8d5fb3;
`;

export const TabLink = styled(NavLink)`
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-bottom: 4px solid transparent;
    background-color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: none;
    text-decoration: none;
    color: black;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &.active {
        background-color: #f3f3f3;
        border: 2px solid #8d5fb3;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:hover {
        background-color: #f3f3f3;
    }
`;

export const ContentContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 550px;
    margin: 0px auto;
    background-color: #f9f9f9;
    border: 2px solid #8d5fb3;
`;

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

export const DashboardTitle = styled.a`
    font-size: 1.5em;
    margin: 0;
    color: white;
    font-weight: normal;
    text-decoration: none;

    &:hover {
        color: #e8e8e8;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const DashboardLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    cursor: pointer;
    margin-left: 30px;

    &:hover {
        color: #e8e8e8;
    }
`;

export const ContentWrapper = styled.div`
    padding-top: 60px
    padding-left: 20px;
    padding-right: 20px;
    color: black;
`;