export interface Dragon {
  id: string;
  name: string;
  type: DragonType;
  level: number;
  attack: number;
  defense: number;
  health: number;
  speed: number;
  description: string;
}

export type DragonType =
  | 'Fire'
  | 'Ice'
  | 'Earth'
  | 'Lightning'
  | 'Dark'
  | 'Light'
  | 'Chaos'
  | 'Ethereal';

// Mock data for dragons
export const dragonsData: Dragon[] = [
  {
    id: '1',
    name: 'Inferno',
    type: 'Fire',
    level: 10,
    attack: 85,
    defense: 65,
    health: 100,
    speed: 75,
    description:
      'A fierce dragon with scales as hot as the core of the earth. Its roar can melt mountains.',
  },
  {
    id: '2',
    name: 'Frostbite',
    type: 'Ice',
    level: 9,
    attack: 70,
    defense: 80,
    health: 100,
    speed: 65,
    description:
      'Its breath can freeze entire lakes in seconds. Scales shimmer like diamonds in the sunlight.',
  },
  {
    id: '3',
    name: 'Terravore',
    type: 'Earth',
    level: 11,
    attack: 90,
    defense: 95,
    health: 100,
    speed: 50,
    description:
      'Ancient and wise, this dragons scales are made of living stone. It can merge with mountains for camouflage.',
  },
  {
    id: '4',
    name: 'Stormbringer',
    type: 'Lightning',
    level: 10,
    attack: 95,
    defense: 60,
    health: 100,
    speed: 90,
    description:
      'Born in storm clouds, its wings generate electricity with each flap. Can channel lightning through its horns.',
  },
  {
    id: '5',
    name: 'Shadowfang',
    type: 'Dark',
    level: 12,
    attack: 100,
    defense: 70,
    health: 100,
    speed: 80,
    description:
      'This dragon melts into shadows at will. Its scales absorb light, making it nearly invisible at night.',
  },
  {
    id: '6',
    name: 'Luminara',
    type: 'Light',
    level: 11,
    attack: 75,
    defense: 85,
    health: 100,
    speed: 85,
    description:
      'Scales glow with inner light. Legend says this dragon was born from a falling star.',
  },
];
