import styles from './projects-section.module.scss';

export const ProjectsSection = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.header1}>Projetos</h1>
            <div id="projects" className={styles.teamCards}>
                <a href="/">
                    <div className={styles.teamCardsCard}>
                        <h1 className={styles.teamCardsCardTitle}>Bitcoin Alert</h1>
                        <p className={styles.teamCardsCardSubtitle}>
                            Double click the the text to edit its content, to edit font size, font
                            colors, and all css properties in the style panel.
                        </p>
                    </div>
                </a>
                <a href="/">
                    <div className={styles.teamCardsCard}>
                        <h1 className={styles.teamCardsCardTitle}>FinDash</h1>
                        <p className={styles.teamCardsCardSubtitle}>
                            Double click the the text to edit its content, to edit font size, font
                            colors, and all css properties in the style panel.
                        </p>
                    </div>
                </a>
                <a href="/">
                    <div className={styles.teamCardsCard}>
                        <h1 className={styles.teamCardsCardTitle}>ChatBot AI</h1>
                        <p className={styles.teamCardsCardSubtitle}>
                            Double click the the text to edit its content, to edit font size, font
                            colors, and all css properties in the style panel.
                        </p>
                    </div>
                </a>
                <a href="/">
                    <div className={styles.teamCardsCard}>
                        <h1 className={styles.teamCardsCardTitle}>Blog com Ruby</h1>
                        <p className={styles.teamCardsCardSubtitle}>
                            Double click the the text to edit its content, to edit font size, font
                            colors, and all css properties in the style panel.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};
