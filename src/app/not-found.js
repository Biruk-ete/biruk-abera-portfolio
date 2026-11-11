import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiCompass } from "react-icons/fi";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./not-found.css";

export default function NotFound() {
    return (
        <main className="not-found-page">
            <Navbar />

            <section className="not-found-content">
                <div className="not-found-decoration decoration-one" />
                <div className="not-found-decoration decoration-two" />
                <div className="not-found-label">
                    <span className="not-found-label-dot" />
                    PAGE NOT FOUND
                </div>
                <div className="not-found-number">
                    4<span>0</span>4
                </div>
                <h1>
                    Looks like you have
                    <br />
                    taken a <span>wrong turn.</span>
                </h1>
                <p className="not-found-description">
                    The page you are looking for does not exist, has been moved, or is not available yet. Let's get you back on track.
                </p>
                <div className="not-found-actions">
                    <Link href="/" className="not-found-home-button">
                        <FiArrowLeft />
                        Back to Home
                    </Link>
                    <Link href="/projects" className="not-found-project-link">
                        Explore Projects
                        <FiArrowUpRight />
                    </Link>
                </div>
                <div className="not-found-bottom">
                    <FiCompass />
                    <span>There is always another direction to explore.</span>
                </div>
            </section>

            <Footer />
        </main>
    );
}