'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiPenTool, FiDatabase, FiHeart, FiAward, FiExternalLink, FiMapPin, FiCalendar, } from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './About.css';

const skills = [
    {
        icon: <FiCode />,
        title: 'Frontend Development',
        description:
            'Building responsive and interactive user interfaces with modern frontend technologies.',
        technologies: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',],
    },
    {
        icon: <FiDatabase />,
        title: 'Backend Development',
        description:
            'Developing application logic, working with databases, and integrating RESTful APIs.',
        technologies: [
            'Laravel', 'PHP', 'Express', 'REST APIs', 'MySQL', 'PostgreSQL',
        ],
    },
    {
        icon: <FiPenTool />,
        title: 'UX / UI Design',
        description:
            'Creating intuitive digital experiences through research, wireframes, and thoughtful interface design.',
        technologies: [
            'Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems',
        ],
    },
];

const volunteering = [
    {
        icon: <FiAward />,
        title: 'Volunteer Programming Trainer',
        organization: 'Community Education',
        date: '08/2024 - 09/2024',
        description:
            'Delivered introductory C++ lessons to secondary school students in Addis Ababa. Prepared accessible learning materials and guided students through fundamental programming concepts.',
    },
    {
        icon: <FiHeart />,
        title: 'Community Service Volunteer',
        organization: "St. Mary's University",
        date: '01/2024 - 02/2025',
        description:
            'Supported humanitarian initiatives, including fundraising campaigns to provide assistance to children and elderly individuals in need.',
    },
];

const certifications = [
    {
        icon: <FiAward />,
        title: 'Google UX Design',
        issuer: 'Coursera',
        date: 'Specialization Certificate',
        href: 'https://www.coursera.org/account/accomplishments/specialization/80GHX8712OJO',
    },
    {
        icon: <FiCode />,
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: 'Certification',
        href: 'https://freecodecamp.org/certification/biruk-ab/responsive-web-design',
    },
    {
        icon: <FiAward />,
        title: 'AI Fundamentals',
        issuer: 'IBM SkillsBuild',
        date: 'Digital Credential',
        href: 'https://www.credly.com/badges/24fea55d-2630-4ea9-956b-55fd93e22166/public_url',
    },
];

export default function About() {
    return (
        <div className="about-wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-glow" />
                <div className="about-hero-grid" />

                <div className="about-hero-content">
                    <span className="about-eyebrow">
                        GET TO KNOW ME
                    </span>

                    <h1 className="about-title">
                        Bridging the gap between
                        <span className="about-title-highlight">
                            {' '}code and design.
                        </span>
                    </h1>

                    <p className="about-subtitle">
                        I am a Computer Science graduate passionate about
                        building meaningful digital experiences through
                        software development and thoughtful design.
                    </p>

                    <div className="about-hero-monogram">
                        BA<span>.</span>
                    </div>

                    <div className="about-hero-meta">
                        <span>CODE · DESIGN · CREATE</span>
                    </div>

                    <div className="about-hero-scroll">
                        <span></span>
                        SCROLL TO EXPLORE
                    </div>
                </div>
            </section>

            <main className="about-main">

                {/* INTRODUCTION */}
                <section className="about-intro-section">

                    {/* PROFILE IMAGE */}
                    <div className="about-image-column">
                        <div className="about-image-glow" />

                        <div className="about-image-frame">
                            <Image
                                src="/Photo.JPG"
                                alt="Portrait of Biruk Abera"
                                width={600}
                                height={750}
                                priority
                                className="about-profile-img"
                            />

                            <div className="about-image-overlay">
                                <span>BA.</span>
                            </div>
                        </div>

                        <div className="about-image-caption">
                            <div className="about-caption-icon">
                                <FiCode />
                            </div>

                            <div className="about-caption-text">
                                <strong>Biruk Abera</strong>
                                <span>Software Developer</span>
                            </div>

                            <span
                                className="about-caption-status"
                                aria-label="Profile status"
                            />
                        </div>
                    </div>

                    {/* BIOGRAPHY */}
                    <div className="about-text-content">
                        <span className="about-label">
                            A LITTLE ABOUT ME
                        </span>

                        <h2 className="about-section-title">
                            Hi, I&apos;m Biruk Abera.
                        </h2>

                        <p className="about-bio">
                            I am a software developer and designer based in Addis Ababa, Ethiopia. I graduated from St. Mary&apos;s University with a Bachelor of Science in Computer Science, and I am advancing my skills in Software Development and QA at IBT College of Canada.
                        </p>

                        <p className="about-bio">
                            My journey started with a curiosity about how technology works. That curiosity grew into a passion for building web applications and creating useful digital products. I work with technologies such as React, Next.js, and Laravel, while bringing a user-centered perspective from my UX/UI design background.
                        </p>

                        <p className="about-bio">
                            I enjoy combining technical problem-solving with creative thinking to build applications that are not only functional, but also intuitive  and accessible.
                        </p>

                        <div className="about-actions">
                            <Link
                                href="/projects"
                                className="about-btn-primary"
                            >
                                Explore my work
                                <FiArrowRight />
                            </Link>

                            <a
                                href="/Biruk-Abera-CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="about-btn-secondary"
                            >
                                Download CV
                                <FiExternalLink />
                            </a>
                        </div>
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section className="about-section about-skills-section">
                    <div className="about-section-header">
                        <div>
                            <span className="about-label">
                                MY TOOLKIT
                            </span>

                            <h2 className="about-section-title">
                                Skills & Technologies
                            </h2>
                        </div>

                        <p className="about-section-description">
                            The tools and technologies I use to turn ideas
                            into functional digital experiences.
                        </p>
                    </div>

                    <div className="about-skills-grid">
                        {skills.map((skill) => (
                            <article
                                className="about-skill-card"
                                key={skill.title}
                            >
                                <div className="about-skill-card-top">
                                    <div className="about-skill-icon">
                                        {skill.icon}
                                    </div>
                                </div>

                                <h3>{skill.title}</h3>

                                <p className="about-skill-description">
                                    {skill.description}
                                </p>

                                <div className="about-tech-list">
                                    {skill.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>


                {/* VOLUNTEERING SECTION */}
                <section className="about-beyond-section">
                    <div className="about-beyond-section-header">
                        <div>
                            <span className="about-beyond-label">
                                BEYOND THE CODE
                            </span>

                            <h2 className="about-beyond-section-title">
                                Giving back to the community.
                            </h2>
                        </div>

                        <p className="about-beyond-section-description">
                            Experiences that helped me grow beyond
                            technology and contribute to others.
                        </p>
                    </div>

                    <div className="about-beyond-grid">
                        {volunteering.map((item) => (
                            <article
                                className="about-beyond-card"
                                key={item.title}
                            >
                                <div className="about-beyond-card-header">
                                    <div className="about-beyond-icon">
                                        {item.icon}
                                    </div>

                                    <span className="about-beyond-date">
                                        <FiCalendar />
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="about-beyond-card-title">
                                    {item.title}
                                </h3>

                                <span className="about-beyond-organization">
                                    {item.organization}
                                </span>

                                <p className="about-beyond-card-description">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CERTIFICATIONS & AWARDS SECTION */}
                <section className="about-certs-section">
                    <div className="about-certs-section-header">
                        <div>
                            <span className="about-certs-label">
                                CREDENTIALS
                            </span>

                            <h2 className="about-certs-section-title">
                                Certifications & Recognition
                            </h2>
                        </div>

                        <p className="about-certs-section-description">
                            Certifications and recognition that reflect
                            my learning and professional development.
                        </p>
                    </div>

                    <div className="about-certs-grid">
                        {certifications.map((certificate) => {
                            const CardContent = (
                                <>
                                    <div
                                        className={`about-certs-icon ${certificate.highlight ? 'highlight' : ''
                                            }`}
                                    >
                                        {certificate.icon}
                                    </div>

                                    <div className="about-certs-content">
                                        <h3 className="about-certs-card-title">
                                            {certificate.title}
                                        </h3>

                                        <p className="about-certs-issuer">
                                            {certificate.issuer}
                                        </p>

                                        <span className="about-certs-date">
                                            {certificate.date}
                                        </span>
                                    </div>

                                    {certificate.href && (
                                        <FiExternalLink className="about-certs-link-icon" />
                                    )}
                                </>
                            );

                            return certificate.href ? (
                                <a
                                    key={certificate.title}
                                    href={certificate.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="about-certs-card"
                                >
                                    {CardContent}
                                </a>
                            ) : (
                                <div
                                    key={certificate.title}
                                    className="about-certs-card about-certs-award-card"
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </section>


                {/* CALL TO ACTION */}
                <section className="about-cta">
                    <div className="about-cta-glow" />

                    <div className="about-cta-content">
                        <span className="about-label">
                            WHAT&apos;S NEXT?
                        </span>

                        <h2>
                            Let&apos;s build something
                            <span> meaningful.</span>
                        </h2>

                        <p>
                            I am open to opportunities in front-end
                            development and quality assurance. Let&apos;s
                            connect and create something valuable.
                        </p>

                        <Link
                            href="/contact"
                            className="about-btn-primary about-cta-button"
                        >
                            Get in touch
                            <FiArrowRight />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
