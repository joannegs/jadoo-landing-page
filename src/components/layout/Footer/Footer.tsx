import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons/Icons'
import styles from './Footer.module.scss'

const columnKeys = ['company', 'contact', 'more'] as const
const columnLinkKeys: Record<(typeof columnKeys)[number], string[]> = {
  company: ['about', 'careers', 'blog'],
  contact: ['help', 'press', 'partnerships'],
  more: ['fees', 'airlines', 'tips'],
}

const socialLinks = [
  { key: 'instagram', icon: InstagramIcon, href: '#' },
  { key: 'facebook', icon: FacebookIcon, href: '#' },
  { key: 'twitter', icon: TwitterIcon, href: '#' },
] as const

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>
              Jadoo<span>.</span>
            </p>
            <p className={styles.tagline}>{t('footer.tagline')}</p>

            <ul className={styles.social}>
              {socialLinks.map(({ key, icon: Icon, href }) => (
                <li key={key}>
                  <a href={href} aria-label={t(`footer.social.${key}`)} className={styles.socialLink}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.columns} aria-label={t('footer.columnsNavLabel')}>
            {columnKeys.map((columnKey) => (
              <div key={columnKey}>
                <h3>{t(`footer.${columnKey}.title`)}</h3>
                <ul>
                  {columnLinkKeys[columnKey].map((linkKey) => (
                    <li key={linkKey}>
                      <a href="#">{t(`footer.${columnKey}.${linkKey}`)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={styles.app}>
            <h3>{t('footer.app.title')}</h3>
            <div className={styles.storeButtons}>
              <span className={styles.storeButton}>{t('footer.app.googlePlay')}</span>
              <span className={styles.storeButton}>{t('footer.app.appStore')}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </Container>
    </footer>
  )
}
