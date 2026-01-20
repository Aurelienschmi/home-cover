import Link from 'next/link';
import styles from './Hero.module.scss';
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Reveal width="100%">
                <h1>Sublimez votre intérieur sans travaux lourds</h1>
            </Reveal>
            <Reveal width="100%" delay={0.4}>
                <p>La solution covering haut de gamme pour vos meubles et cuisines.</p>
            </Reveal>
            <Reveal width="100%" delay={0.6}>
                <Link href="/contact" className={styles.ctaButton}>
                    Demander un devis gratuit
                </Link>
            </Reveal>
        </div>
    );
}
