import { Container } from '../../ui/Container/Container'
import { IconBadge } from '../../ui/IconBadge/IconBadge'
import { IconButton } from '../../ui/IconButton/IconButton'
import { AirportIcon, HeartIcon, LeafIcon, MapIcon, PaymentIcon, PinIcon, SendIcon } from '../../icons/Icons'
import { tripSteps } from '../../../data/steps'
import type { TripStep } from '../../../types'
import santoriniImage from '../../../assets/images/trip-santorini.webp'
import styles from './BookTrip.module.scss'

const icons: Record<TripStep['icon'], typeof PinIcon> = {
  pin: PinIcon,
  payment: PaymentIcon,
  airport: AirportIcon,
}

export function BookTrip() {
  return (
    <section className={styles.bookTrip} aria-labelledby="book-trip-heading">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <p className="eyebrow">Rápido e fácil</p>
          <h2 id="book-trip-heading" className={styles.title}>
            Reserve sua próxima viagem em 3 passos simples
          </h2>

          <ol className={styles.steps}>
            {tripSteps.map((step, index) => {
              const Icon = icons[step.icon]
              return (
                <li key={step.id} className={styles.step}>
                  <IconBadge tone={index === 1 ? 'accent' : index === 2 ? 'navy' : 'primary'}>
                    <Icon />
                  </IconBadge>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className={styles.visual}>
          <article className={styles.tripCard}>
            <img
              src={santoriniImage}
              width={900}
              height={900}
              alt="Vielas brancas de Santorini com vista para o mar Egeu"
              loading="lazy"
              decoding="async"
              className={styles.tripImage}
            />
            <div className={styles.tripBody}>
              <h3>Viagem para Santorini</h3>
              <p className={styles.tripMeta}>14–29 de junho · por Equipe Jadoo</p>
              <ul className={styles.tripIcons} aria-label="Inclui passeios sustentáveis, roteiro guiado e envio de itinerário">
                <li>
                  <LeafIcon />
                </li>
                <li>
                  <MapIcon />
                </li>
                <li>
                  <SendIcon />
                </li>
              </ul>
              <div className={styles.tripFooter}>
                <span>24 pessoas confirmadas</span>
                <IconButton label="Salvar viagem nos favoritos" variant="solid">
                  <HeartIcon />
                </IconButton>
              </div>
            </div>
          </article>

         {/*  <div className={styles.progressCard}>
            <p className={styles.progressBadge}>Em andamento</p>
            <h4>Viagem a Roma</h4>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progresso da viagem a Roma"
            >
              <div className={styles.progressFill} style={{ width: '40%' }} />
            </div>
            <p className={styles.progressLabel}>40% concluído</p>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
