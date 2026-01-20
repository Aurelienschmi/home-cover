import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Contact - Home Cover",
    description: "Contactez-nous pour votre projet de rénovation. Devis gratuit et réponse rapide.",
};

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>
                Contactez <span>Home Cover</span>
            </h1>

            <div className={styles.content}>
                <div className={styles.infoColumn}>
                    <h2>Nos Coordonnées</h2>
                    <ul>
                        <li>
                            <strong>Adresse</strong>
                            <span>123 Rue de la Rénovation<br />75000 Paris, France</span>
                        </li>
                        <li>
                            <strong>Téléphone</strong>
                            <span>01 23 45 67 89</span>
                        </li>
                        <li>
                            <strong>Email</strong>
                            <span>contact@home-cover.fr</span>
                        </li>
                        <li>
                            <strong>Horaires</strong>
                            <span>Lundi - Vendredi : 9h - 18h</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.formColumn}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
