import Image from "next/image";
import styles from "../miguel-grau/page.module.css"; // Reusing the same premium layout styles

export default function SimonBolivar() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/simon_bolivar_hero.png"
          alt="Simón Bolívar Hero"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className="fade-in">Simón Bolívar</h1>
          <p className={`${styles.subtitle} fade-in`}>El Libertador</p>
          <div className={styles.heroLine}></div>
          <p className={`${styles.dates} fade-in`}>1783 — 1830</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container">
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <h2>Forjador de Naciones</h2>
            <p>
              Simón Bolívar es la figura más destacada de la emancipación americana. Su genio militar y su visión política permitieron la independencia de seis naciones actuales: Venezuela, Colombia, Ecuador, Panamá, Perú y Bolivia.
            </p>
            <p>
              Más que un conquistador, Bolívar fue un pensador que soñó con una América unida y fuerte, capaz de dialogar de igual a igual con las potencias del mundo. Su legado trasciende las fronteras, siendo el símbolo máximo de la libertad sudamericana.
            </p>
          </div>
          <div className={styles.introRight}>
            <div className={styles.quoteBox}>
              <p className={styles.quote}>
                "He jurado no dar descanso a mi brazo ni reposo a mi alma hasta que haya roto las cadenas que nos oprimen."
              </p>
              <cite>— Juramento del Monte Sacro</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="navy-bg">
        <div className="container">
          <h2 className={styles.sectionTitle}>Gesta Libertadora</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1805</div>
              <div className={styles.event}>
                <h3>Juramento en Roma</h3>
                <p>En el Monte Sacro, Bolívar jura dedicar su vida a la libertad de Hispanoamérica, un compromiso que marcaría el resto de su existencia.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1813</div>
              <div className={styles.event}>
                <h3>Campaña Admirable</h3>
                <p>Libera el occidente de Venezuela y recibe en Caracas el título solemne de "Libertador".</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1819</div>
              <div className={styles.event}>
                <h3>Batalla de Boyacá</h3>
                <p>Cruza los Andes y logra una victoria decisiva que asegura la independencia de Nueva Granada y el nacimiento de la Gran Colombia.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1824</div>
              <div className={styles.event}>
                <h3>Junín y Ayacucho</h3>
                <p>Consolida la independencia del Perú y de toda Sudamérica en las pampas de Junín, seguido por la victoria final de Ayacucho.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="container">
        <div className={styles.legacy}>
          <h2>Un Pensamiento Vivo</h2>
          <div className={styles.legacyGrid}>
            <div className={styles.legacyCard}>
              <h3>Unidad</h3>
              <p>Promovió la unión de las naciones americanas en el Congreso de Panamá como defensa ante el colonialismo.</p>
            </div>
            <div className={styles.legacyCard}>
              <h3>Visión</h3>
              <p>Sus escritos, como la Carta de Jamaica, mostraron un análisis profundo del futuro de las nuevas repúblicas.</p>
            </div>
            <div className={styles.legacyCard}>
              <h3>Libertad</h3>
              <p>Dedicó su inmensa fortuna y su vida entera a la causa de la independencia, muriendo pobre y en el exilio.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Homenaje a Simón Bolívar</p>
          <p className={styles.footerNote}>"La libertad del Nuevo Mundo es la esperanza del universo."</p>
        </div>
      </footer>
    </div>
  );
}
