import type { Metadata } from "next";
import Image from 'next/image';
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "À Propos - MyHomeCover",
    description: "Découvrez notre histoire et notre expertise en covering intérieur.",
};

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textColumn}>
                        <h1>
                            Notre <span>Vision</span>
                        </h1>
                        <p>
                            MyHomeCover est né d'une conviction : il est possible de transformer son intérieur
                            sans passer par la case "grands travaux". Notre expertise dans le vinyle adhésif
                            architectural nous permet de proposer une alternative design, rapide et durable.
                        </p>
                        <p>
                            Que ce soit pour une cuisine démodée, des portes abîmées ou du mobilier standard,
                            nous apportons une touche de luxe et de modernité grâce à des matériaux de pointe
                            (3M DI-NOC, Cover Styl').
                        </p>
                        <p>
                            Notre mission : Révéler le potentiel de votre habitat avec une finition impeccable
                            et des textures ultra-réalistes (bois, béton, pierre, cuir).
                        </p>
                    </div>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/about.png"
                                alt="L'équipe MyHomeCover"
                                fill
                                priority
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
