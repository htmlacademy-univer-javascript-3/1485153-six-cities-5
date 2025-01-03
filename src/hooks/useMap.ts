import { Map, TileLayer } from 'leaflet';
import type { City } from '../types/offer';
import { type RefObject, useEffect, useRef, useState } from 'react';

interface UseMapParameters {
  containerRef: RefObject<HTMLDivElement | null>;
  city: City;
}

export function useMap({
  containerRef,
  city,
}: UseMapParameters): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isCreatedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current && !isCreatedRef.current) {
      const newMap = new Map(containerRef.current, {
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
      newMap.addLayer(layer);
      setMap(newMap);
      isCreatedRef.current = true;
    }
  }, [containerRef, city]);

  return map;
}
