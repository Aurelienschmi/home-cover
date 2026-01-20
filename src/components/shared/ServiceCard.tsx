import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/constants/services';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <Link href={service.link} className={styles.cardLink}>
                {service.image ? (
                    <div className={styles.imageContainer}>
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                        <div className={styles.iconOverlay}>{service.icon}</div>
                    </div>
                ) : (
                    <div className={styles.icon}>{service.icon}</div>
                )}
                <div className={styles.content}>
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                    <span className={styles.link}>En savoir plus</span>
                </div>
            </Link>
        </div>
    );
}
