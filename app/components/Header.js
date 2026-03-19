import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--navy)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--gold)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ color: 'var(--gold)', fontFamily: 'var(--header-font)', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Grandes Héroes
      </Link>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/miguel-grau" style={{ color: 'white', fontWeight: 'bold' }}>Miguel Grau</Link>
        <Link href="/simon-bolivar" style={{ color: 'white', fontWeight: 'bold' }}>Simón Bolívar</Link>
      </nav>
    </header>
  );
}
