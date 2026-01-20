"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname.startsWith(path);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                import Image from 'next/image';
                // ...
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="MyHomeCover Logo"
                            width={150}
                            height={50}
                            style={{ height: '40px', width: 'auto' }}
                            unoptimized
                        />
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={isActive('/services') ? styles.active : ''}>
                                Nos Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={isActive('/about') ? styles.active : ''}>
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={isActive('/contact') ? styles.active : ''}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className={styles.mobileMenuBtn} aria-label="Menu">
                        ☰
                    </button>
                </nav>
            </div>
        </header>
    );
}
