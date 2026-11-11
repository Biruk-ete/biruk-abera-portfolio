'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

import './Navbar.css';

const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="nav-wrapper">
            <div className="nav-container">

                {/* LOGO */}
                <Link href="/" className="nav-logo" onClick={closeMenu}>
                    BA<span className="nav-logo-dot">.</span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="nav-links">
                    {navItems.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(`${item.href}/`));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link ${isActive ? 'nav-active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* DESKTOP CTA */}
                <Link href="/contact" className="nav-cta">
                    Let's talk
                    <FiArrowUpRight />
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <nav
                id="mobile-navigation"
                className={`nav-mobile-menu ${menuOpen ? 'nav-open' : ''}`}
                aria-hidden={!menuOpen}
            >
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== '/' && pathname.startsWith(`${item.href}/`));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-mobile-link ${isActive ? 'nav-active' : ''}`}
                            onClick={closeMenu}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            {item.label}
                            <FiArrowUpRight />
                        </Link>
                    );
                })}

                <Link
                    href="/contact"
                    className="nav-mobile-cta"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                >
                    Let's talk
                    <FiArrowUpRight />
                </Link>
            </nav>
        </header>
    );
}