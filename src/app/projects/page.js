'use client';

import Link from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

import { projectsData } from '../../data/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Projects.css';

export default function Projects() {
    return (
        <div className="projects-wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="projects-hero">
                <div className="projects-hero-glow"></div>
                <div className="projects-hero-grid"></div>
                <div className="projects-hero-content">
                    <span className="projects-eyebrow">
                        MY WORK <span></span> SELECTED PROJECTS
                    </span>
                    <h1 className="projects-title">
                        Turning ideas into
                        <br />
                        <span className="projects-outline">
                            digital experiences.
                        </span>
                    </h1>
                    <p className="projects-subtitle">
                        A collection of projects where I explore development, design, and creative problem-solving.
                    </p>
                    <div className="projects-hero-meta">
                        <span>CODE · DESIGN · CREATE</span>
                    </div>
                </div>
                <div className="projects-hero-monogram">
                    BA<span>.</span>
                </div>
                <div className="projects-hero-scroll">
                    <span></span>
                    SCROLL TO EXPLORE
                </div>
            </section>

            {/* MAIN WORK SECTION */}
            <main className="projects-main">
                <section className="projects-work-section">
                    <div className="projects-section-header">
                        <div>
                            <span className="projects-section-label">
                                SELECTED WORK — 2023 / 2026
                            </span>
                            <h2 className="projects-section-title">
                                Things I have
                                <br />
                                <span>worked on.</span>
                            </h2>
                        </div>
                        <p className="projects-section-description">
                            Each project represents an opportunity to learn, experiment, and build something meaningful.
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <article
                                key={project.id}
                                className="projects-card"
                            >
                                {/* Project image or gradient fallback */}
                                <div className={`projects-image ${project.bgClass}`}>
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} project preview`}
                                            fill
                                            className="projects-preview-image"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    )}
                                    <span className="projects-tag">
                                        {project.tag}
                                    </span>
                                </div>

                                {/* Project information */}
                                <div className="projects-info">
                                    <div className="projects-details">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        {/* Technologies */}
                                        <div className="projects-technologies">
                                            {project.technologies.map((technology) => (
                                                <span key={technology}>
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project action buttons */}
                                        <div className="projects-actions">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="projects-btn projects-btn-primary"
                                                >
                                                    View Project
                                                    <FiArrowUpRight />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="projects-btn projects-btn-secondary"
                                                >
                                                    <FiGithub />
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}