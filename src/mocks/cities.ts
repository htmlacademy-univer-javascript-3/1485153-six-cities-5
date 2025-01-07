import type { City } from '../types/offer';

const DEFAILT_ZOOM = 11;

export const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.377956,
    longitude: 4.897070,
    zoom: DEFAILT_ZOOM,
  },
};

export const PARIS: City = {
  name: 'Paris',
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: DEFAILT_ZOOM,
  },
};

export const BRUSSELS: City = {
  name: 'Brussels',
  location: {
    latitude: 50.85045,
    longitude: 4.34878,
    zoom: DEFAILT_ZOOM,
  },
};

export const CITIES: City[] = [
  PARIS,
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: DEFAILT_ZOOM,
    },
  },
  BRUSSELS,
  AMSTERDAM,
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: DEFAILT_ZOOM,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: DEFAILT_ZOOM,
    },
  },
];
