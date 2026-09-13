import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { Button } from '../../ui/Button/Button'
import heroImage from '../../../assets/images/traveler-hero.png'
import styles from './Hero.module.scss'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow}`}>{t('hero.eyebrow')}</p>
          <h1 id="hero-heading" className={styles.title}>
            {t('hero.title')}
          </h1>
          <p className={styles.lead}>{t('hero.lead')}</p>

          <div className={styles.ctaRow}>
            <Button className={styles.primaryCta} href="#destinos">
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blob} aria-hidden="true" />
          <img
            src={heroImage}
            width={1400}
            height={934}
            alt={t('hero.imageAlt')}
            className={styles.image}
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  )
}
