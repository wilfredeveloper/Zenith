import React from 'react';
import './menu.module.css'

export default function Menu() {
    return (
        <main>
            <div className="overlay"></div>
            <div className="text-block">
                <h1>Our menu</h1>
                {/* For this page, write html for a gallery and use all images in the public folder */}
                <p>Home / Menu</p>
                <div className="gallery">
                    
                    <img src="/1.jpg" alt="food" />
                    <img src="/2.jpg" alt="food" />
                    <img src="/3.jpg" alt="food" />
                    <img src="/4.jpg" alt="food" />
                    <img src="/5.jpg" alt="food" />
                    <img src="/10.jpg" alt="food" />
                    <img src="/7.jpg" alt="food" />
                    <img src="/8.jpg" alt="food" />
                    <img src="/9.jpg" alt="food" />
                </div>
            </div>
        </main>
    );
}