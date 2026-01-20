import Link from 'next/link';
import Image from 'next/image';
import Hero from "@/components/ui/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import Reveal from "@/components/shared/Reveal";
import Testimonials from "@/components/shared/Testimonials";
import Faq from "@/components/shared/Faq";
import { services } from "@/constants/services";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal width="100%">
            <h2 className={styles.sectionTitle}>Nos <span>Réalisations</span></h2>
          </Reveal>
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4].map((item) => (
              <Reveal key={item} delay={item * 0.1}>
                <div className={styles.galleryItem}>
                  <Image
                    src={`/assets/gallery/project-${item}.png`}
                    alt={`Réalisation MyHomeCover ${item}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal width="100%">
            <h2 className={styles.sectionTitle}>À <span>Propos</span></h2>
          </Reveal>
          <div className={styles.aboutContent}>
            <Reveal>
              <p>
                MyHomeCover est le spécialiste du relooking d'intérieur par adhésif haute performance.
                Nous transformons vos meubles, cuisines et portes sans travaux lourds ni poussière.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p>
                Une solution écologique, économique et design pour donner une seconde vie à votre habitat.
                Nos équipes interviennent rapidement pour un résultat bluffant et durable.
              </p>
            </Reveal>

            <div className={styles.ctaContainer}>
              <Link href="/about" className={styles.ctaButton}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alternate}`}>
        <div className={styles.container}>
          <Reveal width="100%">
            <h2 className={styles.sectionTitle}>Nos <span>Prestations</span></h2>
          </Reveal>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Faq />

      <section className={styles.section}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <Reveal width="100%">
            <h2 className={styles.sectionTitle}>Obtenez Votre <span>Devis Personnalisé</span></h2>
            <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              Vous avez un projet de rénovation ? Remplissez notre formulaire en quelques secondes pour recevoir une estimation gratuite.
            </p>
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.ctaButton}>
                Demander mon devis gratuit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
