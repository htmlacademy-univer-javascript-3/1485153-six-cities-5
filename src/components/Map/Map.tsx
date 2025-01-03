import { useEffect, useRef } from 'react';
import { Marker, Icon } from 'leaflet';
import type { City, Offer } from '../../types/offer';
import { useMap } from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  city: City;
  offers: Offer[];
}

const DEFAULT_ICON = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
});

// const SELECTED_ICON = new Icon({
//   iconUrl: 'pin-active.svg',
//   iconSize: [27, 39],
// });

export const Map = ({
  city,
  offers,
  // selectedLocation,
}: MapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const map = useMap({ containerRef, city });

  useEffect(() => {
    if (!map) {
      return undefined;
    }

    const markers = new Set<Marker>();
    offers.forEach((offer) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, { icon: DEFAULT_ICON });

      marker.addTo(map);
      markers.add(marker);
    });

    return () => {
      markers.forEach((currentMarker) => {
        currentMarker.remove();
      });
      markers.clear();
    };
  }, [map, city, offers]);

  return (
    <div
      ref={containerRef}
      style={{ height: '100%' }}
    />
  );
};
