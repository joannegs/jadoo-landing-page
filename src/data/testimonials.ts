import type { Testimonial } from '../types'
import mikeAvatar from '../assets/images/avatar-mike.webp'
import sarahAvatar from '../assets/images/avatar-sarah.webp'
import chrisAvatar from '../assets/images/avatar-chris.webp'

// Name/role/quote live in the i18n resources under `testimonials.items.<id>`.
export const testimonials: Testimonial[] = [
  { id: 'rafael', avatar: mikeAvatar },
  { id: 'marina', avatar: sarahAvatar },
  { id: 'eduardo', avatar: chrisAvatar },
]
