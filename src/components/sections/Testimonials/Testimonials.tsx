import { useState } from 'react'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { IconButton } from '../../ui/IconButton/IconButton'
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons/Icons'
import { testimonials } from '../../../data/testimonials'
import styles from './Testimonials.module.scss'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  const goTo = (index: number) => {
    const total = testimonials.length
    setActiveIndex(((index % total) + total) % total)
  }

  return (
    <section id="depoimentos" className={styles.testimonials} aria-labelledby="testimonials-heading">
      <Container className={styles.layout}>
        <SectionHeading
          id="testimonials-heading"
          align="left"
          eyebrow="Depoimentos"
          title="O que dizem nossos viajantes"
        />

        <div className={styles.carousel}>
          <div
            className={styles.card}
            role="group"
            aria-roledescription="depoimento"
            aria-label={`${activeIndex + 1} de ${testimonials.length}`}
          >
            <img
              src={active.avatar}
              width={200}
              height={200}
              alt=""
              loading="lazy"
              decoding="async"
              className={styles.avatar}
            />
            <blockquote className={styles.quote}>
              <p aria-live="polite">&ldquo;{active.quote}&rdquo;</p>
              <footer>
                <span className={styles.name}>{active.name}</span>
                <span className={styles.role}>{active.role}</span>
              </footer>
            </blockquote>
          </div>

          <div className={styles.controls}>
            <div className={styles.dots}>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  className={styles.dot}
                  aria-current={index === activeIndex}
                  aria-label={`Ver depoimento de ${testimonial.name}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <div className={styles.arrows}>
              <IconButton
                label="Depoimento anterior"
                variant="solid"
                onClick={() => goTo(activeIndex - 1)}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton label="Próximo depoimento" variant="solid" onClick={() => goTo(activeIndex + 1)}>
                <ChevronRightIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
