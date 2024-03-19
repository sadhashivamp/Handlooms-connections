import React, { useState, useEffect } from 'react';
import axios from "axios"
import Background from '../Common/Background';
import { useNavigate } from 'react-router-dom';

const PlaceSelect = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch state data when the component mounts
        const fetchStates = async () => {
            try {
                const response = await axios.get('http://localhost:3002/states');
                setStates(response.data);

                console.log(response)
            } catch (error) {
                console.error('Error fetching state data:', error);
            }
        };
        fetchStates();
    }, []);

    useEffect(() => {
        // Fetch city data when the selected state changes
        const fetchCities = async () => {
            try {
                if (selectedState) {
                    const response = await axios.get(`http://localhost:3002/cities/${selectedState}`);
                    setCities(response.data);

                    console.log(response)

                }
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        };
        fetchCities();
    }, [selectedState]);




    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        // Reset selected city when state changes
        setSelectedCity('');
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleSubmit = () => {
        // Perform action when user submits the form, like navigating to the dashboard
        console.log('User selected:', selectedState, selectedCity);
        // Add your navigation logic here
        navigate(`/dashboard?state=${selectedState}&city=${selectedCity}`);
    };

    return (
        <div className='place-select-container'>
            <Background />
            <div className="place-select">
                <span>Select State and City to View Job Requests</span>
                <label htmlFor="state">Select State:</label>
                <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="">-- Select State --</option>
                    {states.map(state => (
                        <option key={state.name} value={state.name}>{state.name}</option>
                    ))}
                </select>

                <label htmlFor="city">Select City:</label>
                <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
                    <option value="">-- Select City --</option>
                    {selectedState && cities.filter(city => city.state === selectedState).map(city => (
                        <option key={city._id} value={city.name}>{city.name}</option>
                    ))}
                </select>
                <button onClick={handleSubmit} disabled={!selectedState || !selectedCity}>Go and Check Details in Dashboard</button>
            </div>
        </div>

    );
};

export default PlaceSelect;
