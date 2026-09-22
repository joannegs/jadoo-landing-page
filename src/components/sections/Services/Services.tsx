import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Container } from '../../ui/Container/Container'
import { IconBadge } from '../../ui/IconBadge/IconBadge'
import { CustomizeIcon, EventIcon, FlightIcon, WeatherIcon } from '../../icons/Icons'
import { services } from '../../../data/services'
import type { ServiceItem } from '../../../types'
import decor from '../../../assets/images/decor.png'
import styles from './Services.module.scss'

const icons: Record<ServiceItem['id'], typeof WeatherIcon> = {
  weather: WeatherIcon,
  flight: FlightIcon,
  event: EventIcon,
  customize: CustomizeIcon,
}

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicos" className={styles.services} aria-labelledby="services-heading">
      <img src={decor} alt="" className={styles.decor} aria-hidden="true" />
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
        />

        <ul className={styles.grid}>
          {services.map((service) => {
            const Icon = icons[service.id]
            return (
              <li key={service.id} className={styles.card}>
                <IconBadge>
                  <Icon />
                </IconBadge>
                <h3 className={styles.cardTitle}>{t(`services.items.${service.id}.title`)}</h3>
                <p className={styles.cardText}>{t(`services.items.${service.id}.description`)}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
