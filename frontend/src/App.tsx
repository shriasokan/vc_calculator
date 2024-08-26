import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GlobalStyle, ContentWrapper } from './Styles';
import Dashboard from './components/Dashboard';
import CalculatorPage from './pages/CalculatorPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Dashboard />
      <ContentWrapper>
        <Routes>
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/calculators/*" element={<CalculatorPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </ContentWrapper>
    </Router>
  );
};

const Calculator = () => <div>Calculators</div>;
const AboutUs = () => <div>About Us</div>;
const Services = () => <div>Services</div>;

export default App;
