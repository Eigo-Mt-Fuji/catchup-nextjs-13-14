'use client';
import styles from './index.module.css';

export function Sample2() {
    const onScroll = (e : any) => {
        window.console.log(e);
    };
    return (
        <section className={styles.content} onScroll={(e) => {onScroll(e);}}>
            <div className={styles.item}>A</div>
            <div className={styles.item}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>4</div>
        </section>
    )
}