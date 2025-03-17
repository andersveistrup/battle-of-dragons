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
