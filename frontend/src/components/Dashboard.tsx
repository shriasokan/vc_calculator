import React from 'react';
import { DashboardContainer, DashboardTitle, OptionsContainer, DashboardLink } from '../Styles';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <DashboardContainer>
            <DashboardTitle>Venture Capital Calculator</DashboardTitle>
            <OptionsContainer>
                <DashboardLink href="/calculator">Calculators</DashboardLink>
                <DashboardLink href="/about-us">About Us</DashboardLink>
                <DashboardLink href="/services">Services</DashboardLink>
            </OptionsContainer>
        </DashboardContainer>
    );
};

export default Dashboard;