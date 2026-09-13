import type { ServiceItem } from '../types'

export const services: ServiceItem[] = [
  {
    id: 'weather',
    title: 'Clima em tempo real',
    description:
      'Previsões atualizadas para cada destino, para você planejar as malas e os passeios sem surpresas.',
    icon: 'weather',
  },
  {
    id: 'flight',
    title: 'Melhores voos',
    description:
      'Comparamos dezenas de companhias aéreas para encontrar o trajeto mais rápido pelo melhor preço.',
    icon: 'flight',
  },
  {
    id: 'event',
    title: 'Eventos locais',
    description:
      'Indicações de festivais, shows e experiências autênticas em cada cidade do seu roteiro.',
    icon: 'event',
  },
  {
    id: 'customize',
    title: 'Personalização total',
    description:
      'Cada roteiro é ajustado ao seu ritmo de viagem, orçamento e interesses pessoais.',
    icon: 'customize',
  },
]
