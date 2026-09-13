import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Container } from '../../ui/Container/Container'
import { IconBadge } from '../../ui/IconBadge/IconBadge'
import { CustomizeIcon, EventIcon, FlightIcon, WeatherIcon } from '../../icons/Icons'
import { services } from '../../../data/services'
import type { ServiceItem } from '../../../types'
import styles from './Services.module.scss'

const icons: Record<ServiceItem['icon'], typeof WeatherIcon> = {
  weather: WeatherIcon,
  flight: FlightIcon,
  event: EventIcon,
  customize: CustomizeIcon,
}

export function Services() {
  return (
    <section id="servicos" className={styles.services} aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Categoria"
          title="Os melhores serviços para a sua viagem"
        />

        <ul className={styles.grid}>
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <li key={service.id} className={styles.card}>
                <IconBadge>
                  <Icon />
                </IconBadge>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
