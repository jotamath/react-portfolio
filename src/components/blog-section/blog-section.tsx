import styles from './blog-section.module.scss';

export const BlogSection = () => {
    return (
        <div className={styles.content}>
            <div className={styles.blogContainer}>
                <h1 className={styles.blogTitle}>Em breve...</h1>
                <p className={styles.blogText}>Feito com Rails e React</p>
            </div>
        </div>
    );
}; 