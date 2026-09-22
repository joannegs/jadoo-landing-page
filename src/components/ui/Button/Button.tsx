import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'secondary' | 'ghost'

interface CommonProps {
  variant?: Variant
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  icon,
  iconPosition = 'start',
  className,
  children,
  ...rest
}: ButtonProps & { className?: string }) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && iconPosition === 'start' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'end' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  )

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  )
}
