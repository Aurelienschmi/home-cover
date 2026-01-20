"use client";

import { useState } from 'react';
import styles from './Faq.module.scss';
import { faq } from '@/constants/faq';
import Reveal from './Reveal';

export default function Faq() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal width="100%">
                    <h2 className={styles.title}>Questions <span>Fréquentes</span></h2>
                </Reveal>

                <div className={styles.accordion}>
                    {faq.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.05}>
                            <div className={styles.item}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={openId === item.id}
                                >
                                    {item.question}
                                    <span>{openId === item.id ? '−' : '+'}</span>
                                </button>
                                {openId === item.id && (
                                    <div className={styles.answer}>
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
