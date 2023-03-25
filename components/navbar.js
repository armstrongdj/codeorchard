import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href="/">CodeOrchard</Link>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/varieties">Varieties</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}