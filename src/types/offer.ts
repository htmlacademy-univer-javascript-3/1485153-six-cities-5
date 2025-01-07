export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityName = 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export interface City {
  name: CityName;
  location: Location;
}

export interface Offer {
  id: string;
  title: string;
  type: string; // TODO: типизировать?
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
