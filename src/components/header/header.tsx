import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import styles from './header.module.scss';
import { useState, useEffect } from 'react';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact', 'blog'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={classNames(styles.root, className)} style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgb(233, 114, 114)'}}>
            <Link to="/" className={styles.logo}>
                João Costa
            </Link>
            
            <button 
                className={styles.mobileMenuButton}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    {isMobileMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12"/>
                    ) : (
                        <>
                            <path d="M3 12h18"/>
                            <path d="M3 6h18"/>
                            <path d="M3 18h18"/>
                        </>
                    )}
                </svg>
            </button>

            <nav className={classNames(styles.menu, { [styles.menuOpen]: isMobileMenuOpen })} style={{ '@media (max-width: 768px)': { display: isMobileMenuOpen ? 'flex' : 'none' } }}>
                <NavLink
                    to="/#hero"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: activeSection === 'hero' })
                    }
                    style={({ isActive }) => ({
                        color: activeSection === 'hero' ? '#fff' : '#000',
                        backgroundColor: activeSection === 'hero' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('hero');
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/#about"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: activeSection === 'about' })
                    }
                    style={({ isActive }) => ({
                        color: activeSection === 'about' ? '#fff' : '#000',
                        backgroundColor: activeSection === 'about' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                    }}
                >
                    Sobre
                </NavLink>
                <NavLink
                    to="/#projects"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: activeSection === 'projects' })
                    }
                    style={({ isActive }) => ({
                        color: activeSection === 'projects' ? '#fff' : '#000',
                        backgroundColor: activeSection === 'projects' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                    }}
                >
                    Projetos
                </NavLink>
                <NavLink
                    to="/#contact"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: activeSection === 'contact' })
                    }
                    style={({ isActive }) => ({
                        color: activeSection === 'contact' ? '#fff' : '#000',
                        backgroundColor: activeSection === 'contact' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                    })}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                >
                    Contato
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: activeSection === 'blog' })
                    }
                    style={({ isActive }) => ({
                        color: activeSection === 'blog' ? '#fff' : '#000',
                        backgroundColor: activeSection === 'blog' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                    })}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Blog
                </NavLink>
            </nav>
        </header>
    );
};
