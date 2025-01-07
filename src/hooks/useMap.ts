import { Map, TileLayer, type LatLngExpression } from 'leaflet';
import type { City } from '../types/offer';
import { type RefObject, useEffect, useRef } from 'react';

interface UseMapParameters {
  containerRef: RefObject<HTMLDivElement | null>;
  city: City;
}

export function useMap({
  containerRef,
  city,
}: UseMapParameters): Map | null {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (!mapRef.current) {
      mapRef.current = new Map(containerRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      mapRef.current.addLayer(layer);
    } else {
      const potentialCenter: LatLngExpression = {
        lat: city.location.latitude,
        lng: city.location.longitude,
      };
      const center = mapRef.current.getCenter();

      if (!center.equals(potentialCenter)) {
        mapRef.current.setView(potentialCenter, city.location.zoom);
      }
    }
  }, [containerRef, city]);

  return mapRef.current;
}
