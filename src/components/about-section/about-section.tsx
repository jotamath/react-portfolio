import styles from './about-section.module.scss';

export const AboutSection = () => {
    return (
        <div className={styles.content}>
            <div id="about" className={styles.about}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutHeader}>
                        <h1>Sobre Mim</h1>
                        <h5>Desenvolvedor Fullstack Ruby + React</h5>
                    </div>
                    <div className={styles.aboutMainContent}>
                        <div className={styles.aboutText}>
                            Atualmente cursando o 3º período de Engenharia da Computação, busco
                            constantemente aprimorar meus conhecimentos na área de
                            desenvolvimento de software. Sou pós-graduado em Desenvolvimento
                            Fullstack pela Descomplica Faculdade Digital, o que me proporcionou
                            uma base sólida em diversas tecnologias modernas.
                            <br />
                            <br />
                            Minha paixão pela programação encontrou um novo significado quando
                            descobri o Ruby on Rails. A elegância e produtividade que o
                            framework oferece me intrigaram desde o início, motivando-me a
                            mergulhar cada vez mais fundo no ecossistema Ruby e suas tecnologias
                            complementares.
                        </div>
                        <div className={styles.aboutLogos}>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"
                                alt="Ruby Logo"
                                className={styles.img1}
                            />
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
                                alt="Rails Logo"
                                className={styles.img2}
                            />
                        </div>
                    </div>
                    <button className={styles.aboutButton}>Entre em contato</button>
                </div>
            </div>
        </div>
    );
}; 