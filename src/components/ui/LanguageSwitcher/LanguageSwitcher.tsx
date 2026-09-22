import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDownIcon, GlobeIcon } from '../../icons/Icons'
import { languages } from '../../../data/languages'
import styles from './LanguageSwitcher.module.scss'

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const currentCode = i18n.language.slice(0, 2).toLowerCase()
  const selected = languages.find((language) => language.code.toLowerCase() === currentCode) ?? languages[0]

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className={styles.switcher} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('languageSwitcher.label')}
        onClick={() => setIsOpen((open) => !open)}
      >
        <GlobeIcon />
        <span>{selected.code}</span>
        <ChevronDownIcon className={styles.chevron} />
      </button>

      {isOpen && (
        <ul className={styles.menu} role="listbox">
          {languages.map((language) => (
            <li key={language.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={language.code === selected.code}
                className={styles.option}
                onClick={() => {
                  void i18n.changeLanguage(language.code.toLowerCase())
                  setIsOpen(false)
                }}
              >
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
