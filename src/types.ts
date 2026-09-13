export interface NavLink {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: 'weather' | 'flight' | 'event' | 'customize'
}

export interface Destination {
  id: string
  city: string
  country: string
  price: string
  days: number
  image: string
  imageAlt: string
}

export interface TripStep {
  id: string
  title: string
  description: string
  icon: 'pin' | 'payment' | 'airport'
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
}

export interface Partner {
  id: string
  name: string
}

export interface Language {
  code: string
  label: string
}
