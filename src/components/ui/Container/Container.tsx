import type { ElementType, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(' ')
  return <Tag className={classes}>{children}</Tag>
}
