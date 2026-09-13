import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { PinIcon } from '../../icons/Icons'
import { destinations } from '../../../data/destinations'
import styles from './Destinations.module.scss'

export function Destinations() {
  return (
    <section id="destinos" className={styles.destinations} aria-labelledby="destinations-heading">
      <Container>
        <SectionHeading
          id="destinations-heading"
          eyebrow="Mais procurados"
          title="Os destinos mais desejados"
        />

        <ul className={styles.grid}>
          {destinations.map((destination) => (
            <li key={destination.id} className={styles.card}>
              <img
                src={destination.image}
                width={900}
                height={1000}
                alt={destination.imageAlt}
                loading="lazy"
                decoding="async"
                className={styles.image}
              />
              <div className={styles.info}>
                <div>
                  <h3 className={styles.city}>{destination.city}</h3>
                  <p className={styles.country}>{destination.country}</p>
                </div>
                <p className={styles.price}>{destination.price}</p>
              </div>
              <p className={styles.duration}>
                <PinIcon />
                {destination.days} dias de viagem
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
