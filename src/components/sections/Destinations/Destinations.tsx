import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { PinIcon } from '../../icons/Icons'
import { destinations } from '../../../data/destinations'
import { useInView } from '../../../hooks/useInView'
import styles from './Destinations.module.scss'

export function Destinations() {
  const { t } = useTranslation()
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="destinos"
      ref={ref}
      className={`${styles.destinations} ${isInView ? styles.inView : ''}`}
      aria-labelledby="destinations-heading"
    >
      <Container>
        <SectionHeading
          id="destinations-heading"
          eyebrow={t('destinations.eyebrow')}
          title={t('destinations.title')}
        />

        <ul className={styles.grid}>
          {destinations.map((destination) => (
            <li key={destination.id} className={styles.card}>
              <img
                src={destination.image}
                width={900}
                height={1000}
                alt={t(`destinations.items.${destination.id}.imageAlt`)}
                loading="lazy"
                decoding="async"
                className={styles.image}
              />
              <div className={styles.info}>
                <div>
                  <h3 className={styles.city}>{t(`destinations.items.${destination.id}.city`)}</h3>
                  <p className={styles.country}>{t(`destinations.items.${destination.id}.country`)}</p>
                </div>
                <p className={styles.price}>{t(`destinations.items.${destination.id}.price`)}</p>
              </div>
              <p className={styles.duration}>
                <PinIcon />
                {t('destinations.days', { count: destination.days })}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
