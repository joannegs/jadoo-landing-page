import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { IconButton } from '../../ui/IconButton/IconButton'
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons/Icons'
import { testimonials } from '../../../data/testimonials'
import { useInView } from '../../../hooks/useInView'
import styles from './Testimonials.module.scss'

export function Testimonials() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]
  const activeName = t(`testimonials.items.${active.id}.name`)
  const { ref, isInView } = useInView<HTMLElement>()

  const goTo = (index: number) => {
    const total = testimonials.length
    setActiveIndex(((index % total) + total) % total)
  }

  return (
    <section
      id="depoimentos"
      ref={ref}
      className={`${styles.testimonials} ${isInView ? styles.inView : ''}`}
      aria-labelledby="testimonials-heading"
    >
      <Container className={styles.layout}>
        <SectionHeading
          id="testimonials-heading"
          align="left"
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
        />

        <div className={styles.carousel}>
          <div
            className={styles.card}
            role="group"
            aria-roledescription={t('testimonials.roleDescription')}
            aria-label={t('testimonials.position', {
              current: activeIndex + 1,
              total: testimonials.length,
            })}
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
              <p aria-live="polite">&ldquo;{t(`testimonials.items.${active.id}.quote`)}&rdquo;</p>
              <footer>
                <span className={styles.name}>{activeName}</span>
                <span className={styles.role}>{t(`testimonials.items.${active.id}.role`)}</span>
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
                  aria-label={t('testimonials.goTo', {
                    name: t(`testimonials.items.${testimonial.id}.name`),
                  })}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <div className={styles.arrows}>
              <IconButton label={t('testimonials.prev')} variant="solid" onClick={() => goTo(activeIndex - 1)}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton label={t('testimonials.next')} variant="solid" onClick={() => goTo(activeIndex + 1)}>
                <ChevronRightIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
