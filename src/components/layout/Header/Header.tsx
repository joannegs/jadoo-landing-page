import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { Button } from '../../ui/Button/Button'
import { IconButton } from '../../ui/IconButton/IconButton'
import { LanguageSwitcher } from '../../ui/LanguageSwitcher/LanguageSwitcher'
import { CloseIcon, MenuIcon } from '../../icons/Icons'
import { navLinks } from '../../../data/nav'
import styles from './Header.module.scss'

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <a href="#top" className={styles.logo}>
          Jadoo<span>.</span>
        </a>

        <nav className={styles.desktopNav} aria-label={t('header.navLabel')}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{t(`header.nav.${link.key}`)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />

          <IconButton
            label={isMenuOpen ? t('header.menu.close') : t('header.menu.open')}
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Container>

      {createPortal(
        <div
          id="mobile-nav"
          className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}
          hidden={!isMenuOpen}
        >
          <nav aria-label={t('header.mobileNavLabel')}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {t(`header.nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="#assinar" variant="primary" onClick={() => setIsMenuOpen(false)}>
            {t('header.cta')}
          </Button>
        </div>,
        document.body,
      )}
    </header>
  )
}
