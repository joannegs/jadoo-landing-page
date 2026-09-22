import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { partners } from '../../../data/partners'
import { useInView } from '../../../hooks/useInView'
import styles from './PartnerLogos.module.scss'

export function PartnerLogos() {
  const { t } = useTranslation()
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.inView : ''}`}
      aria-label={t('partners.sectionLabel')}
    >
      <Container>
        <p className={styles.label}>{t('partners.label')}</p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <ul className={styles.list}>
              {partners.map((partner) => (
                <li key={partner.id} className={styles.item}>
                  {partner.name}
                </li>
              ))}
            </ul>
            <ul className={styles.list} aria-hidden="true">
              {partners.map((partner) => (
                <li key={`${partner.id}-dup`} className={styles.item}>
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
