import type { Destination } from '../types'
import romeImg from '../assets/images/destination-rome.webp'
import londonImg from '../assets/images/destination-london.webp'
import parisImg from '../assets/images/destination-paris.webp'

export const destinations: Destination[] = [
  {
    id: 'rome',
    city: 'Roma',
    country: 'Itália',
    price: 'R$ 5.420',
    days: 10,
    image: romeImg,
    imageAlt: 'Coliseu iluminado ao entardecer, em Roma',
  },
  {
    id: 'london',
    city: 'Londres',
    country: 'Reino Unido',
    price: 'R$ 4.200',
    days: 12,
    image: londonImg,
    imageAlt: 'Big Ben e um ônibus vermelho de dois andares em Londres',
  },
  {
    id: 'paris',
    city: 'Paris',
    country: 'França',
    price: 'R$ 6.900',
    days: 9,
    image: parisImg,
    imageAlt: 'Torre Eiffel ao entardecer, vista do rio Sena',
  },
]
