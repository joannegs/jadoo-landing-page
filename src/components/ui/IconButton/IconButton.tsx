import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './IconButton.module.scss'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  label: string
  variant?: 'ghost' | 'solid'
}

export function IconButton({
  children,
  label,
  variant = 'ghost',
  className,
  ...rest
}: IconButtonProps) {
  const classes = [styles.iconButton, styles[variant], className].filter(Boolean).join(' ')
  return (
    <button type="button" className={classes} aria-label={label} {...rest}>
      {children}
    </button>
  )
}
