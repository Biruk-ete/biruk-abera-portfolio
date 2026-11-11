import Link from 'next/link';
import { FiArrowUpRight, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="ft-footer">
            <div className="ft-top">
                <div>
                    <span className="ft-label">HAVE A PROJECT IN MIND?</span>
                    <h2>
                        Let's create something
                        <br />
                        <span>amazing together.</span>
                    </h2>
                </div>

                <div className="ft-contact">
                    <a href="mailto:Birukagelan6@gmail.com">
                        Birukagelan6@gmail.com
                        <FiArrowUpRight />
                    </a>
                    <a href="tel:+251967325171">
                        +251 967 325 171
                        <FiArrowUpRight />
                    </a>
                </div>
            </div>

            <div className="ft-bottom">
                <Link href="/" className="ft-logo">
                    BA<span>.</span>
                </Link>

                <p>© {new Date().getFullYear()} Biruk Abera. All rights reserved.</p>

                <div className="ft-socials">
                    <a
                        href="https://www.linkedin.com/in/brukabera"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="https://github.com/Biruk-ete"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}