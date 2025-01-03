import type { City, Offer } from '../types/offer';

export const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.377956,
    longitude: 4.897070,
    zoom: 11,
  },
};

export const OFFERS: Offer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Предложение №1',
    type: 'offer',
    city: AMSTERDAM,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №2 Люкс',
    type: 'offer',
    city: AMSTERDAM,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №3 Ниже среднего',
    type: 'offer',
    city: AMSTERDAM,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    previewImage: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Предложение №4',
    type: 'offer',
    city: AMSTERDAM,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    previewImage: '',
  },
];
