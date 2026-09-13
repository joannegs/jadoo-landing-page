import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, GlobeIcon } from '../../icons/Icons'
import { languages } from '../../../data/languages'
import styles from './LanguageSwitcher.module.scss'

// Presentational only: this project ships pt-BR copy exclusively, so
// selecting a language updates the displayed choice but does not translate
// content — wiring a real i18n layer is out of scope for this portfolio piece.
export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
  const rootRef = useRef<HTMLDivElement>(null)

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
                  setSelected(language)
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
