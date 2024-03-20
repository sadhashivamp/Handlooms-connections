import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Assets/logo.png"
import SimpleSlider from '../Common/Swiper';
import DarkMode from '../DarkMode/DarkMode';

const DashboardPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const state = searchParams.get('state');
    const city = searchParams.get('city');

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <Link to="/Handlooms-connections"><h1>Handlooms</h1></Link>
                    </a>

                    <div class="d-flex mx-auto">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Category 1</a></li>
                                    <li><a class="dropdown-item" href="#">Category 2</a></li>
                                    <li><a class="dropdown-item" href="#">Category 3</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>

                    <div class="d-flex">
                        <button class="btn btn-danger ms-3" type="button">Logout</button>
                        <div style={{ position: "absolute", top: '1.5rem', right: '2rem' }}>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </nav>
            <SimpleSlider />
        </div>


    );
};

export default DashboardPage;
