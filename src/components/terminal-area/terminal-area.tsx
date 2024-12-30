import styles from './terminal-area.module.scss';

const TerminalArea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_terminal}></div>
      <div className={styles.terminal_toolbar}>
        <div className={styles.butt}>
          <button className={`${styles.btn} ${styles['btn-color']}`}></button>
          <button className={styles.btn}></button>
          <button className={styles.btn}></button>
        </div>
        <p className={styles.user}>joaocosta@admin: ~</p>
      </div>
      <div className={styles.terminal_body}>
        <div className={styles.terminal_promt}>
          <span className={styles.terminal_user}>joaocosta@admin:</span>
          <span className={styles.terminal_location}>~</span>
          <span className={styles.terminal_bling}>$</span>
          <span className={styles.terminal_cursor}></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalArea;
