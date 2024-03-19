import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const state = searchParams.get('state');
    const city = searchParams.get('city');

    return (
        <div>
            <h2>Dashboard</h2>
            <p>State: {state}</p>
            <p>City: {city}</p>
            {/* Implement your dashboard content here */}
        </div>
    );
};

export default DashboardPage;
