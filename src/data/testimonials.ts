import type { Testimonial } from '../types'
import mikeAvatar from '../assets/images/avatar-mike.webp'
import sarahAvatar from '../assets/images/avatar-sarah.webp'
import chrisAvatar from '../assets/images/avatar-chris.webp'

export const testimonials: Testimonial[] = [
  {
    id: 'rafael',
    quote:
      'Reservei minha viagem para Roma em menos de dez minutos e todo o suporte durante a viagem foi impecável. Recomendo de olhos fechados.',
    name: 'Rafael Nogueira',
    role: 'Viajou para Roma, Itália',
    avatar: mikeAvatar,
  },
  {
    id: 'marina',
    quote:
      'A equipe montou um roteiro sob medida para a nossa lua de mel em Santorini. Cada detalhe foi pensado, sem nenhuma dor de cabeça.',
    name: 'Marina Duarte',
    role: 'Viajou para Santorini, Grécia',
    avatar: sarahAvatar,
  },
  {
    id: 'eduardo',
    quote:
      'Já viajei com várias agências e a Jadoo foi a primeira que realmente entendeu o que eu queria da viagem, não só o destino.',
    name: 'Eduardo Lima',
    role: 'Viajou para Londres, Reino Unido',
    avatar: chrisAvatar,
  },
]
