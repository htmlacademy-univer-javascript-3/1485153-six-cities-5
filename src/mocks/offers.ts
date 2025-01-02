import type { Offer } from '../types/offer';

export const OFFERS: Offer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Предложение №1',
    type: 'offer',
    city: {
      name: 'Новосибирск',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
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
    city: {
      name: 'Новосибирск',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
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
    city: {
      name: 'Новосибирск',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
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
    city: {
      name: 'Новосибирск',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    previewImage: '',
  },
];
