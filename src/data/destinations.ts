import type { Destination } from '../types'
import romeImg from '../assets/images/destination-rome.webp'
import londonImg from '../assets/images/destination-london.webp'
import parisImg from '../assets/images/destination-paris.webp'

// City/country/price/alt text live in the i18n resources (src/i18n/locales)
// under `destinations.items.<id>`, keyed by `id` below.
export const destinations: Destination[] = [
  { id: 'rome', days: 10, image: romeImg },
  { id: 'london', days: 12, image: londonImg },
  { id: 'paris', days: 9, image: parisImg },
]
