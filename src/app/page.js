import Link from 'next/link';
import Image from 'next/image';

import { FiArrowRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaReact, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiTailwindcss, SiPostman } from 'react-icons/si';

import { projectsData } from '../data/projects';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Homepage.css';

export default function Home() {
  const homeProjects = projectsData
    .filter(project => project.featured)
    .slice(0, 3);

  const displayProjects = homeProjects.length > 0 ? homeProjects : projectsData.slice(0, 3);

  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main-content">

        {/* HERO SECTION */}
        <section className="home-hero">
          <div className="home-hero-glow"></div>
          <div className="home-hero-grid"></div>

          {/* LEFT CONTENT */}
          <div className="home-hero-content">
            <div className="home-hero-eyebrow">
              <span className="home-availability-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="home-hero-intro">
              HELLO, I'M BIRUK ABERA
            </p>

            <h1 className="home-hero-title">
              Building
              <span className="home-hero-outline"> digital</span>
              <br />
              experiences
              <br />
              that <span className="home-hero-highlight">matter.</span>
            </h1>

            <p className="home-hero-description">
              Software Developer creating modern, responsive and user-centered web applications. I turn ideas into functional digital experiences using React, Next.js and Laravel.
            </p>

            <div className="home-hero-actions">
              <Link href="/projects" className="home-hero-primary-btn">
                Explore my work
                <FiArrowRight />
              </Link>

              <Link href="/about" className="home-hero-secondary-btn">
                More about me
                <FiArrowUpRight />
              </Link>
            </div>

            {/* Bottom details */}
            <div className="home-hero-bottom">
              <div className="home-hero-location">
                <span>BASED IN</span>
                <p>Addis Ababa, Ethiopia</p>
              </div>

              <div className="home-hero-socials">
                <a href="https://github.com/Biruk-ete" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/brukabera" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="home-hero-visual">
            <div className="home-hero-image-frame">
              <Image
                src="/Photo.JPG"
                alt="Portrait of Biruk Abera"
                width={600}
                height={750}
                priority
                sizes="(max-width: 768px) 90vw, 600px"
                className="home-hero-profile-img"
              />
              <div className="home-hero-image-overlay"></div>
            </div>

            <div className="home-hero-monogram">
              BA<span>.</span>
            </div>

            <div className="home-hero-floating-card">
              <span className="home-floating-card-label">CURRENTLY</span>
              <div className="home-floating-card-content">
                <span className="home-floating-card-dot"></span>
                <div>
                  <h3>Open to work</h3>
                  <p>Development & QA opportunities</p>
                </div>
              </div>

              <a
                href="/Biruk_Abera_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="home-hero-resume-link"
              >
                <span>
                  <FiDownload />
                  Download my resume
                </span>
                <FiArrowUpRight />
              </a>
            </div>

            <span className="home-hero-vertical-text">CODE · DESIGN · CREATE</span>
          </div>

          <div className="home-hero-scroll">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>


        {/* TECH STACK */}
        <section className="home-tech-stack">
          <div className="home-tech-stack-header">
            <span className="home-section-label">TECHNOLOGIES</span>
            <p>Tools and technologies I work with</p>
          </div>

          <div className="home-logos">
            <div className="home-logo-item"><FaReact className="home-react-icon" /><span>React</span></div>
            <div className="home-logo-item"><SiNextdotjs className="home-next-icon" /><span>Next.js</span></div>
            <div className="home-logo-item"><FaLaravel className="home-laravel-icon" /><span>Laravel</span></div>
            <div className="home-logo-item"><SiMysql className="home-mysql-icon" /><span>MySQL</span></div>
            <div className="home-logo-item"><SiTailwindcss className="home-tailwind-icon" /><span>Tailwind CSS</span></div>
            <div className="home-logo-item"><SiPostman className="home-postman-icon" /><span>Postman</span></div>
            <div className="home-logo-item"><FaFigma className="home-figma-icon" /><span>Figma</span></div>
          </div>
        </section>


        {/* SELECTED PROJECTS */}
        <section className="home-work-section" id="projects">
          <div className="home-section-header">
            <div>
              <span className="home-section-label">SELECTED WORK</span>
              <h2 className="home-section-title">
                Turning ideas into
                <br />
                <span>digital experiences.</span>
              </h2>
            </div>
            <Link href="/projects" className="home-btn-projects">
              View all projects
              <FiArrowRight />
            </Link>
          </div>


          <div className="home-projects-grid">
            {projectsData.slice(0, 3).map((project) => (
              <article
                key={project.id}
                className="home-project-card"
              >
                {/* Project image or gradient fallback */}
                <div className={`home-project-image ${project.bgClass}`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="home-project-preview-image"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}

                  <span className="home-project-tag">
                    {project.tag}
                  </span>
                </div>

                {/* Project information */}
                <div className="home-project-info">
                  <div className="home-project-details">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {/* Technologies */}
                    <div className="home-project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Project action buttons */}
                    <div className="home-project-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="home-project-btn home-project-btn-primary"
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
                          className="home-project-btn home-project-btn-secondary"
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

        {/* RECOGNITION */}
        <section className="home-recognition-section">
          <div className="home-recognition-label">
            <span className="home-section-label">BEYOND THE CODE</span>
            <span className="home-recognition-icon">✳</span>
          </div>
          <div className="home-recognition-content">
            <h2>
              How I approach
              <br />
              every project.
            </h2>
            <p>
              Building digital experiences requires more than just writing code. I bring a proactive, collaborative mindset to every team, ensuring that the final product is technically sound, user-centered, and delivered with professional excellence.
            </p>
            <div className="home-recognition-footer">
              <div>
                <h4>Collaboration & QA</h4>
                <span>Proactive problem-solving & seamless teamwork</span>
              </div>
              <span className="home-recognition-year">MY PROCESS</span>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="home-cta-section">
          <div className="home-cta-glow" />

          <div className="home-cta-content">
            <span className="home-cta-label">
              WHAT&apos;S NEXT?
            </span>

            <h2 className="home-cta-title">
              Let&apos;s build something
              <span> meaningful.</span>
            </h2>

            <p className="home-cta-description">
              I am open to opportunities in front-end development and quality assurance. Let&apos;s connect and create something valuable.
            </p>

            <Link
              href="/contact"
              className="home-cta-button"
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