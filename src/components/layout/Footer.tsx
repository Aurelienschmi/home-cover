import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Home Cover</h3>
                    <p>
                        Votre partenaire de confiance pour tous vos travaux de rénovation et d'aménagement intérieur.
                        Qualité et professionnalisme garantis.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Liens Rapides</h3>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/services">Nos Services</Link></li>
                        <li><Link href="/realisations">Réalisations</Link></li>
                        <li><Link href="/contact">Devis Gratuit</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <ul>
                        <li>📍 123 Rue de la Rénovation, Paris</li>
                        <li>📞 01 23 45 67 89</li>
                        <li>✉️ contact@home-cover.fr</li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © {currentYear} Home Cover. Tous droits réservés.
            </div>
        </footer>
    );
}
