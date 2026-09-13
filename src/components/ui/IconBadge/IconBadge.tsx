import type { ReactNode } from 'react'
import styles from './IconBadge.module.scss'

interface IconBadgeProps {
  children: ReactNode
  tone?: 'primary' | 'accent' | 'navy'
}

export function IconBadge({ children, tone = 'primary' }: IconBadgeProps) {
  return <div className={`${styles.badge} ${styles[tone]}`}>{children}</div>
}
