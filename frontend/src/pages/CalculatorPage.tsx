import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CalculatorTabsWrapper, CalculatorTabsContainer, TabLink, ContentContainer } from '../Styles';
import ValuationPredictor from './calculators/ValuationPredictor';

const Calculator1 = () => <ValuationPredictor/>;
const Calculator2 = () => <div>Calculator 2 Content</div>;
const Calculator3 = () => <div>Calculator 3 Content</div>;

const CalculatorPage: React.FC = () => {
    return (
        <div>
            <CalculatorTabsWrapper>
                <CalculatorTabsContainer>
                    <TabLink 
                        to="/calculators/calculator1"
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                    >
                        Valuation Predictor
                    </TabLink>
                    <TabLink
                        to="/calculators/calculator2"
                        className={({ isActive }) => (isActive ? 'active': '')}
                    >
                        Investment Calculator
                    </TabLink>
                    <TabLink
                        to="/calculators/calculator3"
                        className={({ isActive }) => (isActive ? 'active': '')}
                    >
                        Coming Soon
                    </TabLink>
                </CalculatorTabsContainer>
            </CalculatorTabsWrapper>
            <ContentContainer>
                <Routes>
                    <Route path="calculator1" element={<Calculator1/>} />
                    <Route path="calculator2" element={<Calculator2/>} />
                    <Route path="calculator3" element={<Calculator3/>} />
                </Routes>
            </ContentContainer>
        </div>
    );
};

export default CalculatorPage;