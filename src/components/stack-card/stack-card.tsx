import styles from './stack-card.module.scss';
import cx from 'classnames';

import ReactSvg from '../../assets/svg/react.svg';
import RubySvgrepoComSvg from '../../assets/ruby-svgrepo-com.svg';
import RailsSvgrepoComSvg from '../../assets/rails-svgrepo-com.svg';
import RedisSvgrepoComSvg from '../../assets/redis-svgrepo-com.svg';
import SidekiqIconSvgrepoComSvg from '../../assets/sidekiq-icon-svgrepo-com.svg';
import RspecSvgrepoComSvg from '../../assets/rspec-svgrepo-com.svg';
import LinuxSvgrepoComSvg from '../../assets/linux-svgrepo-com.svg';
import PostgresqlSvgrepoComSvg from '../../assets/postgresql-svgrepo-com.svg';

export interface StackCardProps {
    className?: string;
}

export const StackCard = ({ className }: StackCardProps) => {
    return (
        <div className={cx(styles.content, styles.div1)}>
            <div className={styles.cardCollection}>
                <h1 className={styles.cardCollectionHeader}>Tech Stack</h1>
                <div className={styles.cardCollectionGrid}>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={RubySvgrepoComSvg}
                                    alt="Ruby"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>Ruby</h2>
                                <p>
                                    Linguagem dinâmica, orientada a objetos, com sintaxe elegante e
                                    produtiva
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={RailsSvgrepoComSvg}
                                    alt="Rails"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>Rails</h2>
                                <p>Framework web Ruby que prioriza convenção sobre configuração</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img src={ReactSvg} alt="React" className={styles.techIcon} />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>React</h2>
                                <p>Biblioteca JavaScript para construção de interfaces dinâmicas</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={PostgresqlSvgrepoComSvg}
                                    alt="PostgreSQL"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>PostgreSQL</h2>
                                <p>
                                    Poderoso sistema de gerenciamento de banco de dados relacional
                                    de código aberto
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={RedisSvgrepoComSvg}
                                    alt="Redis"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>Redis</h2>
                                <p>Banco de dados em memória para cache e mensageria</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={SidekiqIconSvgrepoComSvg}
                                    alt="Sidekiq"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>Sidekiq</h2>
                                <p>Sistema de processamento de jobs em background para Ruby</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={RspecSvgrepoComSvg}
                                    alt="RSpec"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>RSpec</h2>
                                <p>Framework de testes BDD para Ruby</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techCard} onClick={() => {}}>
                        <div className={styles.techCardInner}>
                            <div className={styles.techCardFront}>
                                <img
                                    src={LinuxSvgrepoComSvg}
                                    alt="Linux"
                                    className={styles.techIcon}
                                />
                            </div>
                            <div className={styles.techCardBack}>
                                <h2>Linux</h2>
                                <p>Sistema operacional open source robusto e versátil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
