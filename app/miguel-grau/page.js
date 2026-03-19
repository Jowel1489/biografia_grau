import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/miguel_grau_hero.png"
          alt="Miguel Grau Hero"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className="fade-in">Miguel Grau Seminario</h1>
          <p className={`${styles.subtitle} fade-in`}>El Caballero de los Mares</p>
          <div className={styles.heroLine}></div>
          <p className={`${styles.dates} fade-in`}>1834 — 1879</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container">
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <h2>El Héroe del Milenio</h2>
            <p>
              Miguel Grau Seminario no solo fue un brillante estratega naval y un valiente soldado; fue, ante todo, un hombre de principios inquebrantables. Su honor y humanidad, incluso en el fragor de la batalla, le ganaron el respeto tanto de sus compatriotas como de sus adversarios.
            </p>
            <p>
              Como comandante del monitor Huáscar, mantuvo el honor del Perú en alto durante la Guerra del Pacífico, convirtiéndose en el símbolo máximo de la dignidad nacional.
            </p>
          </div>
          <div className={styles.introRight}>
            <div className={styles.quoteBox}>
              <p className={styles.quote}>
                "Yo no soy sino un pobre marino que trata de servir a su patria."
              </p>
              <cite>— Miguel Grau</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="navy-bg">
        <div className="container">
          <h2 className={styles.sectionTitle}>Línea de Vida</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1834</div>
              <div className={styles.event}>
                <h3>Nacimiento</h3>
                <p>Nace en Piura el 27 de julio. Su vocación marina despertó a temprana edad, embarcándose como grumete a los 9 años.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1854</div>
              <div className={styles.event}>
                <h3>Marina de Guerra</h3>
                <p>Ingresa oficialmente a la Marina de Guerra del Perú, iniciando una carrera de ascenso meteórico basada en méritos.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1868</div>
              <div className={styles.event}>
                <h3>Mando del Huáscar</h3>
                <p>Asume el mando del monitor Huáscar, el buque que lo acompañaría en sus mayores gestas heroicas.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>1879</div>
              <div className={styles.event}>
                <h3>Iquique y Angamos</h3>
                <p>El 21 de mayo, en Iquique, salva a los náufragos chilenos. El 8 de octubre, fallece heroicamente en el Combate de Angamos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="container">
        <div className={styles.legacy}>
          <h2>Un Legado Imperecedero</h2>
          <div className={styles.legacyGrid}>
            <div className={styles.legacyCard}>
              <h3>Humanidad</h3>
              <p>Rescató a los sobrevivientes de la Esmeralda y devolvió las pertenencias de Arturo Prat a su viuda.</p>
            </div>
            <div className={styles.legacyCard}>
              <h3>Liderazgo</h3>
              <p>Mantuvo a raya a la escuadra enemiga durante meses con una nave técnicamente inferior.</p>
            </div>
            <div className={styles.legacyCard}>
              <h3>Dignidad</h3>
              <p>Elegido el Peruano del Milenio, su nombre es sinónimo de integridad y patriotismo.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Homenaje a Miguel Grau Seminario</p>
          <p className={styles.footerNote}>"Si el Huáscar no regresa victorioso, yo tampoco regresaré."</p>
        </div>
      </footer>
    </div>
  );
}
