// About.jsx
import React from 'react';
import './contact.module.css'

export default function Contact() {
    return (
        <main>
            <div className="overlay"></div>
            <div className="text-block">
                <h1>Contact Us</h1>
                <p>Home / Contact Us</p> 
                {/* Design a contact form */}
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            
            </div>
        </main>
    );
}

