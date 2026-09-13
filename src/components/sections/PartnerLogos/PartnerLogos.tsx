import { Container } from '../../ui/Container/Container'
import { partners } from '../../../data/partners'
import styles from './PartnerLogos.module.scss'

export function PartnerLogos() {
  return (
    <section className={styles.section} aria-label="Marcas parceiras">
      <Container>
        <p className={styles.label}>Empresas que confiam na Jadoo</p>
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
