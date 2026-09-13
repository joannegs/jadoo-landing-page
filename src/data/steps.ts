import type { TripStep } from '../types'

export const tripSteps: TripStep[] = [
  {
    id: 'destination',
    title: 'Escolha o destino',
    description:
      'Navegue pelos nossos roteiros selecionados e escolha o que combina com o seu momento.',
    icon: 'pin',
  },
  {
    id: 'payment',
    title: 'Faça o pagamento',
    description:
      'Pagamento seguro, parcelado, com confirmação imediata por e-mail e WhatsApp.',
    icon: 'payment',
  },
  {
    id: 'airport',
    title: 'Chegue ao aeroporto na data marcada',
    description:
      'Você recebe todos os detalhes do embarque com antecedência — sem correria de última hora.',
    icon: 'airport',
  },
]
