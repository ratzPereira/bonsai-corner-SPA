import { ProfileInterface } from './profile.interface';
export interface BonsaiInterface {
  id: string;
  images: string[];
  name: string;
  age: number;
  description: string;
  bonsaiCreationDate: Date;
  bonsaiUpdatedDate: Date;
  species: string;
  interventions: string[];
  favoritesCount: number;
  isPublic: boolean;

  owner: ProfileInterface;
}
