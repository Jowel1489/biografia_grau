import Image from "next/image";
import Link from "next/link";
import styles from "./landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.heroOverlay}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '10vh' }}>
        <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem' }}>Grandes Héroes de la Libertad</h1>
        <p style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.1rem' }}>FORJADORES DEL DESTINO AMERICANO</p>
        
        <div className={styles.grid}>
          <Link href="/miguel-grau" className={styles.card}>
            <div className={styles.cardImgContainer}>
              <Image src="/miguel_grau_hero.png" alt="Miguel Grau" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.cardContent}>
              <h2>Miguel Grau</h2>
              <p>El Caballero de los Mares</p>
            </div>
          </Link>

          <Link href="/simon-bolivar" className={styles.card}>
            <div className={styles.cardImgContainer}>
              <Image src="/simon_bolivar_hero.png" alt="Simón Bolívar" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.cardContent}>
              <h2>Simón Bolívar</h2>
              <p>El Libertador</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
