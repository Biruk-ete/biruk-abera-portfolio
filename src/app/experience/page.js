'use client';

import { FiBriefcase, FiBookOpen, FiAward, FiMapPin, FiCalendar, FiArrowUpRight, } from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Experience.css';

const workExperience = [
    {
        title: 'UX/UI Designer and Front-End Developer Intern',
        company: 'EthERNet',
        location: 'Addis Ababa, Ethiopia',
        date: '03/2025 - 05/2025',
        description: [
            'Designed and implemented intuitive, user-friendly interfaces for web applications.',
            'Collaborated with developers and stakeholders to translate functional requirements into interactive UX/UI designs.',
            'Conducted user research, wireframing, and prototyping to enhance usability and engagement.',
            'Optimized layouts for responsive design across devices and screen sizes, improving accessibility and user satisfaction.',
        ],
    },
    {
        title: 'Information Technology Intern',
        company: 'DBE (Development Bank of Ethiopia)',
        location: 'Addis Ababa, Ethiopia',
        date: '07/2024 - 09/2024',
        description: [
            'Assisted in configuring, troubleshooting, and maintaining network systems across multiple branch locations.',
            'Supported the installation and upgrading of hardware and software systems.',
            "Developed, customized, and enhanced the bank's website, contributing design ideas and functionality improvements.",
            'Awarded Outstanding Internship Performance for exceptional contribution and problem-solving.',
        ],
    },
];

const researchExperience = [
    {
        title: 'Lawyer-Client Interaction Platform (Shengo)',
        role: 'Lead Developer & Researcher',
        date: '07/2024 - 01/2025',
        description:
            'Designed and developed a full-stack web platform to address inefficiencies in legal communication. Integrated secure role-based access, real-time chat, scheduling, and document management. Applied agile methodology to iteratively build and test the system using Laravel and React.',
    },
    {
        title: 'Digital Library Architecture',
        role: 'UX Researcher',
        date: '05/2023 - 08/2023',
        description:
            "Carried out a research and design project focused on improving academic resource accessibility at St. Mary's University. Identified critical gaps in the existing ecosystem and proposed a comprehensive digital library blueprint.",
    },
];

const education = [
    {
        degree: 'Advanced Digital Skills: Software Development & QA',
        school: 'IBT College of Canada',
        date: '2026 - Present',
        description:
            'Six-month program covering software development, testing fundamentals, Git workflows, APIs, and professional practice.',
    },
    {
        degree: 'BSc. in Computer Science',
        school: "St. Mary's University",
        date: '2021 - 2025',
        description:
            'Final GPA: 3.50/4.00. Relevant coursework: Object-Oriented Programming, Databases, Web Development, and Software Engineering. Thesis: Lawyer-client interaction platform.',
    },
];

export default function Experience() {
    return (
        <div className="exp-wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="exp-hero">
                <div className="exp-hero-glow"></div>
                <div className="exp-hero-grid"></div>

                <div className="exp-hero-content">
                    <span className="exp-eyebrow">
                        MY JOURNEY
                    </span>
                    <h1 className="exp-title">
                        Experience & <br />
                        <span className="exp-outline">
                            Education.
                        </span>
                    </h1>
                    <p className="exp-subtitle">
                        A journey through my professional experience, academic research, and continuous growth in technology.
                    </p>
                    <div className="exp-hero-monogram">
                        BA<span>.</span>
                    </div>
                    <div className="exp-hero-meta">
                        <span>CODE · DESIGN · CREATE</span>
                    </div>
                    <div className="exp-hero-scroll">
                        <span></span>
                        SCROLL TO EXPLORE
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="exp-main">

                {/* LEFT COLUMN */}
                <div className="exp-timeline-col">

                    {/* WORK EXPERIENCE */}
                    <section className="exp-section">
                        <div className="exp-section-header">
                            <span className="exp-label">
                                PROFESSIONAL EXPERIENCE
                            </span>
                            <h2 className="exp-section-title">
                                Where I've Worked
                            </h2>
                            <p className="exp-section-description">
                                Practical experience gained through professional internships and collaboration.
                            </p>
                        </div>

                        <div className="exp-timeline">
                            {workExperience.map((job, index) => (
                                <article
                                    key={job.company}
                                    className="exp-timeline-item"
                                >
                                    <div className="exp-timeline-icon">
                                        <FiBriefcase />
                                    </div>

                                    <div className="exp-timeline-content">
                                        <div className="exp-timeline-header">
                                            <div>
                                                <span className="exp-item-number">
                                                    EXPERIENCE 0{index + 1}
                                                </span>
                                                <h3>{job.title}</h3>
                                            </div>
                                            <span className="exp-date">
                                                <FiCalendar />
                                                {job.date}
                                            </span>
                                        </div>

                                        <div className="exp-company">
                                            <strong>{job.company}</strong>
                                            <span>
                                                <FiMapPin />
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="exp-card-divider"></div>
                                        <ul className="exp-list">
                                            {job.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* RESEARCH EXPERIENCE */}
                    <section className="exp-section exp-research-section">
                        <div className="exp-section-header">
                            <span className="exp-label">
                                RESEARCH & DEVELOPMENT
                            </span>
                            <h2 className="exp-section-title">
                                Academic Projects
                            </h2>
                            <p className="exp-section-description">
                                Research, problem-solving, and technical projects developed during my academic journey.
                            </p>
                        </div>

                        <div className="exp-timeline">
                            {researchExperience.map((research, index) => (
                                <article
                                    key={research.title}
                                    className="exp-timeline-item"
                                >
                                    <div className="exp-timeline-icon">
                                        <FiBookOpen />
                                    </div>

                                    <div className="exp-timeline-content">
                                        <div className="exp-timeline-header">
                                            <div>
                                                <span className="exp-item-number">
                                                    RESEARCH 0{index + 1}
                                                </span>
                                                <h3>{research.title}</h3>
                                            </div>
                                            <span className="exp-date">
                                                <FiCalendar />
                                                {research.date}
                                            </span>
                                        </div>
                                        <div className="exp-company">
                                            <strong>{research.role}</strong>
                                        </div>
                                        <div className="exp-card-divider"></div>
                                        <p className="exp-description">
                                            {research.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
                {/* RIGHT COLUMN */}
                <aside className="exp-side-col">
                    {/* EDUCATION */}
                    <section className="exp-card-section">
                        <div className="exp-section-header">
                            <span className="exp-label">
                                EDUCATION
                            </span>
                            <h2 className="exp-section-title">
                                Academic Background
                            </h2>
                        </div>

                        <div className="exp-education-list">
                            {education.map((edu, index) => (
                                <article
                                    key={edu.school}
                                    className="exp-education-card"
                                >
                                    <div className="exp-edu-icon">
                                        <FiBookOpen />
                                    </div>
                                    <div className="exp-edu-content">
                                        <span className="exp-edu-date">
                                            <FiCalendar />
                                            {edu.date}
                                        </span>
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.school}</h4>
                                        <p>{edu.description}</p>
                                        {index === 0 && (
                                            <span className="exp-current-tag">
                                                Current Program
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* CAREER SUMMARY */}
                    <section className="exp-highlight-card">
                        <span className="exp-highlight-label">
                            MY APPROACH
                        </span>
                        <h3>
                            Always learning.
                            <br />
                            Always building.
                        </h3>
                        <p>
                            I believe in continuous improvement, practical
                            learning, and building technology that solves
                            real-world problems.
                        </p>
                        <FiArrowUpRight className="exp-highlight-arrow" />
                    </section>
                </aside>
            </main>

            <Footer />
        </div>
    );
}
