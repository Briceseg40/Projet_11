import React from 'react'
import './css/main.css'
import Features from './Features';


function Home() {
    return (
        <div>
        
        <div class="hero">
            <section class="hero-content">
                <h2 class="sr-only">Promoted Content</h2>
                <p class="subtitle">No fees.</p>
                <p class="subtitle">No minimum deposit.</p>
                <p class="subtitle">High interest rates.</p>
                <p class="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <Features />
    </div>
        );
}

export default Home;
