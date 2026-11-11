'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUpRight, } from 'react-icons/fi';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (status.message) {
            setStatus({
                type: '',
                message: '',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setStatus({
            type: '',
            message: '',
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || 'Unable to send your message.'
                );
            }

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.',
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

        } catch (error) {
            setStatus({
                type: 'error',
                message:
                    error.message ||
                    'Something went wrong. Please try again.',
            });

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-wrapper">
            <Navbar />

            {/* HERO SECTION */}
            <section className="contact-hero">
                <div className="contact-hero-glow"></div>
                <div className="contact-hero-grid"></div>

                <div className="contact-hero-content">
                    <span className="contact-eyebrow">
                        GET IN TOUCH
                    </span>

                    <h1 className="contact-title">
                        Let's build something
                        <br />
                        <span className="contact-outline">
                            amazing together.
                        </span>
                    </h1>

                    <p className="contact-hero-description">
                        Have a project in mind, a question, or just want to
                        connect? I would love to hear from you.
                    </p>
                </div>

                <div className="contact-hero-monogram">
                    BA<span>.</span>
                </div>

                <div className="contact-hero-meta">
                    <span>CODE · DESIGN · CREATE</span>
                </div>

                <div className="contact-hero-scroll">
                    <span></span>
                    SCROLL TO EXPLORE
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="contact-main">

                {/* CONTACT INFORMATION */}
                <section className="contact-info-section">
                    <div className="contact-section-heading">
                        <span className="contact-section-label">
                            CONTACT INFORMATION
                        </span>

                        <h2>
                            Let's start a conversation.
                        </h2>
                    </div>

                    <div className="contact-cards-grid">

                        {/* EMAIL CARD */}
                        <div className="contact-card">
                            <div className="contact-card-top">
                                <div className="contact-icon-wrapper">
                                    <FiMail />
                                </div>

                                <FiArrowUpRight className="contact-arrow" />
                            </div>

                            <h3>Email Me</h3>

                            <p>Have a question or collaboration idea?</p>

                            <a
                                href="mailto:Birukagelan6@gmail.com"
                                className="contact-card-link"
                            >
                                Birukagelan6@gmail.com
                            </a>
                        </div>

                        {/* PHONE CARD */}
                        <div className="contact-card">
                            <div className="contact-card-top">
                                <div className="contact-icon-wrapper">
                                    <FiPhone />
                                </div>

                                <FiArrowUpRight className="contact-arrow" />
                            </div>

                            <h3>Call Me</h3>

                            <p>Available for professional conversations.</p>

                            <a
                                href="tel:+251967325171"
                                className="contact-card-link"
                            >
                                +251 967 325 171
                            </a>
                        </div>

                        {/* LOCATION CARD */}
                        <div className="contact-card">
                            <div className="contact-card-top">
                                <div className="contact-icon-wrapper">
                                    <FiMapPin />
                                </div>

                                <FiArrowUpRight className="contact-arrow" />
                            </div>

                            <h3>Location</h3>

                            <p>Currently based in East Africa.</p>

                            <span className="contact-card-link">
                                Addis Ababa, Ethiopia
                            </span>
                        </div>

                    </div>
                </section>

                {/* CONTACT FORM */}
                <section className="contact-form-container">

                    {/* FORM INTRODUCTION */}
                    <div className="contact-form-header">
                        <span className="contact-section-label">
                            HAVE A PROJECT IN MIND?
                        </span>

                        <h2>
                            Send me a message.
                        </h2>

                        <p>
                            Whether you have an exciting project, a
                            collaboration opportunity, or simply want to
                            connect, feel free to reach out.
                        </p>

                        <div className="contact-availability">
                            <span className="availability-dot"></span>
                            Open to opportunities
                        </div>
                    </div>

                    {/* FORM FIELDS */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="contact-form-row">

                            {/* NAME FIELD */}
                            <div className="contact-form-group">
                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    maxLength={100}
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* EMAIL FIELD */}
                            <div className="contact-form-group">
                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    autoComplete="email"
                                    maxLength={254}
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        {/* SUBJECT FIELD */}
                        <div className="contact-form-group">
                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What is this regarding?"
                                maxLength={150}
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        {/* MESSAGE FIELD */}
                        <div className="contact-form-group">
                            <label htmlFor="message">
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project or idea..."
                                rows="5"
                                maxLength={5000}
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        {/* SUCCESS AND ERROR FEEDBACK */}
                        {status.message && (
                            <p
                                className={`contact-form-status ${status.type}`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        )}

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <FiSend />}
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}
