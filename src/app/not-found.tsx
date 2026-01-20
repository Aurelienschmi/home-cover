import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Introuvable</h2>
            <p className={styles.text}>
                Oups ! La page que vous recherchez semble avoir déménagé ou n&apos;existe plus.
            </p>
            <Link href="/" className={styles.homeLink}>
                Retour à l&apos;accueil
            </Link>
        </div>
    );
}
