"use client";

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation of API call
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Submitted (Simulation):', data);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="name">Nom complet</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                    placeholder="Jean Dupont"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    required
                    placeholder="jean@exemple.com"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="subject">Sujet</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.input}
                    required
                    placeholder="Rénovation complète..."
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    required
                    placeholder="Parlez-nous de votre projet..."
                />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
            </button>
        </form>
    );
}
