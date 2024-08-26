import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormContainer, Dropdown, SubmitButton, InputGroup } from '../../Styles';

const ValuationPredictor: React.FC = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const [industries, setIndustries] = useState<string[]>([]);
    const [country, setCountry] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [numberOfInvestors, setNumberOfInvestors] = useState<number>(0);
    const [investors, setInvestors] = useState<string[]>([]);
    const [dateJoined, setDateJoined] = useState('');
    const [prediction, setPrediction] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await new Promise<any>((resolve, reject) => {
                    fetch('http://localhost:5001/api/data-options')
                        .then(response => response.json())
                        .then(data => resolve(data))
                        .catch(error => reject(error));
                });
                setCountries(response.countries);
                setIndustries(response.industries);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleNumberOfInvestorsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const count = parseInt(e.target.value, 10);
        setNumberOfInvestors(count);
        setInvestors(Array(count).fill(''));
    };

    const handleInvestorChange = (index: number, value: string) => {
        const updatedInvestors = [...investors];
        updatedInvestors[index] = value;
        setInvestors(updatedInvestors);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/submit', {
                country, industry, investors, dateJoined
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <FormContainer>
            <h2>Valuation Predictor</h2>
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <label>Country:</label>
                    <Dropdown value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Select Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </Dropdown>
                </InputGroup>
                <InputGroup>
                    <label>Industry:</label>
                    <Dropdown value={industry} onChange={(e) => setIndustry(e.target.value)}>
                        <option value="">Select Industry</option>
                        {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </Dropdown>
                </InputGroup>
                <InputGroup>
                    <label>Number of Investors:</label>
                    <Dropdown value={numberOfInvestors.toString()} onChange={handleNumberOfInvestorsChange}>
                        <option value="0">Select Number of Investors</option>
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={(i + 1).toString()}>{i + 1}</option>
                        ))}
                    </Dropdown>
                </InputGroup>
                {investors.length > 0 && investors.map((inv, index) => (
                    <InputGroup key={index}>
                        <label>Investor {index + 1}</label>
                        <input 
                            type="text"
                            value={inv}
                            onChange={(e) => handleInvestorChange(index, e.target.value)}
                        />
                    </InputGroup>
                ))}
                <InputGroup>
                    <label>Date Joined:</label>
                    <input type="date" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />
                </InputGroup>
                <SubmitButton type="submit">Predict Valuation</SubmitButton>
            </form>
            {prediction && <div>Predicted Valuation: {prediction}</div>}
        </FormContainer>
    );
};

export default ValuationPredictor;