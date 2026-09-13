import { Container } from '../../ui/Container/Container'
import { Button } from '../../ui/Button/Button'
import { PlayIcon } from '../../icons/Icons'
import heroImage from '../../../assets/images/traveler-hero.png'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow}`}>As melhores rotas ao redor do mundo</p>
          <h1 id="hero-heading" className={styles.title}>
            Viaje, aproveite e viva uma vida nova e plena
          </h1>
          <p className={styles.lead}>
            Roteiros personalizados, suporte durante toda a viagem e os melhores preços em
            passagens e hospedagem — para você focar só em aproveitar.
          </p>

          <div className={styles.ctaRow}>
            <Button className={styles.primaryCta} href="#destinos">
              Encontrar minha viagem
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blob} aria-hidden="true" />
          <img
            src={heroImage}
            width={1400}
            height={934}
            alt="Viajante sorridente com mochila, sentada sobre a mala, pronta para uma nova aventura"
            className={styles.image}
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  )
}
