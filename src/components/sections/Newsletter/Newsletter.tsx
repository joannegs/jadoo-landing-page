import { useId, useState, type FormEvent } from 'react'
import { Container } from '../../ui/Container/Container'
import { Button } from '../../ui/Button/Button'
import { CheckCircleIcon, SendIcon } from '../../icons/Icons'
import styles from './Newsletter.module.scss'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'success' | 'error'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const inputId = useId()
  const feedbackId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error')
      return
    }

    // No backend behind this portfolio demo — we just confirm the intent.
    setStatus('success')
    setEmail('')
  }

  return (
    <section id="assinar" className={styles.newsletter} aria-labelledby="newsletter-heading">
      <Container className={styles.card}>
        <div className={styles.decor} aria-hidden="true">
          <SendIcon />
        </div>

        <h2 id="newsletter-heading" className={styles.title}>
          Assine para receber novidades, promoções e dicas de viagem da Jadoo
        </h2>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label htmlFor={inputId} className={styles.visuallyHiddenLabel}>
            Endereço de e-mail
          </label>
          <input
            id={inputId}
            type="email"
            required
            placeholder="Seu e-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            className={styles.input}
            aria-invalid={status === 'error'}
            aria-describedby={status !== 'idle' ? feedbackId : undefined}
          />
          <Button type="submit">Inscrever-se</Button>
        </form>

        <p
          id={feedbackId}
          className={`${styles.feedback} ${styles[status]}`}
          role="status"
          aria-live="polite"
        >
          {status === 'success' && (
            <>
              <CheckCircleIcon /> Inscrição confirmada! Fique de olho na sua caixa de entrada.
            </>
          )}
          {status === 'error' && <>Digite um e-mail válido para continuar.</>}
        </p>
      </Container>
    </section>
  )
}
