import TerminalArea from '../terminal-area/terminal-area';
import styles from './hero-section.module.scss';
import cx from 'classnames';

export interface HeroSectionProps {
    className?: string;
}


export const HeroSection = ({ className }: HeroSectionProps) => {
    return (
        <div className={cx(styles.content, styles.div1)}>
            <div id="hero" className={styles.heroImage}>
                <TerminalArea />
                <div className={styles.heroImageContentBox}>
                    <h1 className={styles.heroImageTitle}>Olá, eu sou</h1>
                    <h3 className={styles.heroImageDescription}>Desenvolvedor Fullstack</h3>
                    <button
                        onClick={() => window.open('/assets/cv.md')}
                        className={styles.heroImageExploreButton}
                        style={{
                            border: '2px solid currentColor',
                            borderRadius: '8px',
                        }}
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};
