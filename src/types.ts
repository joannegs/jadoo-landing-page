export interface NavLink {
  key: 'destinations' | 'services' | 'howItWorks' | 'testimonials'
  href: string
}

export interface ServiceItem {
  id: 'weather' | 'flight' | 'event' | 'customize'
}

export interface Destination {
  id: 'rome' | 'london' | 'paris'
  days: number
  image: string
}

export interface TripStep {
  id: 'destination' | 'payment' | 'airport'
  icon: 'pin' | 'payment' | 'airport'
}

export interface Testimonial {
  id: 'rafael' | 'marina' | 'eduardo'
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
