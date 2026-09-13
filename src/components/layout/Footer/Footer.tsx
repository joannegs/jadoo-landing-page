import { Container } from '../../ui/Container/Container'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../icons/Icons'
import styles from './Footer.module.scss'

const columns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'Ajuda / FAQ', href: '#' },
      { label: 'Imprensa', href: '#' },
      { label: 'Parcerias', href: '#' },
    ],
  },
  {
    title: 'Mais',
    links: [
      { label: 'Taxas de embarque', href: '#' },
      { label: 'Companhias aéreas', href: '#' },
      { label: 'Dicas de economia', href: '#' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram da Jadoo', icon: InstagramIcon, href: '#' },
  { label: 'Facebook da Jadoo', icon: FacebookIcon, href: '#' },
  { label: 'X (Twitter) da Jadoo', icon: TwitterIcon, href: '#' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>
              Jadoo<span>.</span>
            </p>
            <p className={styles.tagline}>
              Planeje sua próxima viagem em minutos e viaje com total tranquilidade.
            </p>

            <ul className={styles.social}>
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className={styles.socialLink}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.columns} aria-label="Links institucionais">
            {columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={styles.app}>
            <h3>Baixe nosso app</h3>
            <div className={styles.storeButtons}>
              <span className={styles.storeButton}>Google Play</span>
              <span className={styles.storeButton}>App Store</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Jadoo. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
