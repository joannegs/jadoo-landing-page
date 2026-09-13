import type { TripStep } from '../types'

// Title/description live in the i18n resources under `bookTrip.steps.<id>`.
export const tripSteps: TripStep[] = [
  { id: 'destination', icon: 'pin' },
  { id: 'payment', icon: 'payment' },
  { id: 'airport', icon: 'airport' },
]
