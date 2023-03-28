import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='text-center'>
      <Link href="/">CodeOrchard</Link>
      <ul>
        <li>
          <Link href="/varieties">Varieties</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}