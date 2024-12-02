import React from 'react';
import projects from '../data/project.json';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="section-title">My Projects</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="portfolio-links">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;