import type { Offer } from '../types/offer';
import { AMSTERDAM } from './cities';

export const OFFERS: Offer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Предложение №1',
    type: 'offer',
    city: AMSTERDAM,
    price: 999,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №2 Люкс',
    type: 'offer',
    price: 888,
    city: AMSTERDAM,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №3 Ниже среднего',
    type: 'offer',
    price: 777,
    city: AMSTERDAM,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №4',
    type: 'offer',
    price: 666,
    city: AMSTERDAM,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: '',
  },
];
