import React from 'react';
import App from '../Apps'

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Fraction Analytics</h2>
                <button onClick={handleLogout}>Log out</button>
            </nav>
            <App/>
        </section>
        
        
    );
}

export default Hero;