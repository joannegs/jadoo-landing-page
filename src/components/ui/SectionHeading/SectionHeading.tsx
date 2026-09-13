import type { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
