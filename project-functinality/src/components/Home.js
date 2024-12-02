import React from 'react';
import '../styles/Home.css';

function Home() {
    const cards = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and interactive websites with modern technologies.',
            icon: '🌐',
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Crafting user-friendly and visually appealing designs.',
            icon: '🎨',
        },
        {
            id: 3,
            title: 'React Development',
            description: 'Developing dynamic, single-page applications using React.',
            icon: '⚛️',
        },
    ];

    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1 className="hero-text">Welcome to My Portfolio</h1>
                <p className="subtext">
                    I am passionate about creating beautiful, functional, and responsive digital experiences.
                </p>
                <button className="cta-button">Explore Projects</button>
            </div>

            <div className="cards-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-icon">{card.icon}</div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;