import classNames from 'classnames';
import styles from './site-footer.module.scss';
import facebookIcon from '~/assets/svg/facebook.svg';
import githubIcon from '~/assets/svg/github.svg';
import InstagramSvgrepoComSvg from '../../assets/instagram-svgrepo-com.svg';
import LinkedinSvgrepoComSvg from '../../assets/linkedin-svgrepo-com.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Fale comigo:</div>
                <div className={styles.small}>
                    Email:  
                    <a href="mailto:01jmnc@gmail.com?subject=Vim pelo site e ...">
                         01jmnc@gmail.com
                    </a>
                    <br />
                    Tel:  
                    <a href="tel:+5524999437613">+55 24 999437613</a>
                    <br />
                    Brazil
                    <br />
                </div>
            </div>
            <div className={styles.social}>
                <a href="fb.com/joaomatheuscosta">
                    <img className={styles.icon} src={facebookIcon} alt="facebook" />
                </a>
                <a href="https://instagram.com/_jmath">
                    <img className={styles.icon} src={InstagramSvgrepoComSvg} alt="medium" />
                </a>
                <a href="https://linkedin.com/in/jotamath">
                    <img className={styles.icon} src={LinkedinSvgrepoComSvg} alt="medium" />
                </a>
                <a href="https://github.com/jotamath">
                    <img className={styles.icon} src={githubIcon} alt="github" />
                </a>
            </div>
        </div>
    );
};
