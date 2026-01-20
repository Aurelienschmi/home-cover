"use client";

import styles from './Testimonials.module.scss';
import { testimonials } from '@/constants/testimonials';
import Reveal from './Reveal';

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal width="100%">
                    <h2 className={styles.title}>Ce Que Disent <span>Nos Clients</span></h2>
                </Reveal>

                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <Reveal key={t.id} delay={index * 0.1}>
                            <div className={styles.card}>
                                <p>{t.text}</p>
                                <h4>{t.name}</h4>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
