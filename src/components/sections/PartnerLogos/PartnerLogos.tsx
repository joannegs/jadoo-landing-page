import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { partners } from '../../../data/partners'
import styles from './PartnerLogos.module.scss'

export function PartnerLogos() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('partners.sectionLabel')}>
      <Container>
        <p className={styles.label}>{t('partners.label')}</p>
        <ul className={styles.list}>
          {partners.map((partner) => (
            <li key={partner.id} className={styles.item}>
              {partner.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
