import classNames from 'classnames';
import { City } from '../../types/offer';
import { useAppDispatch } from '../../hooks/redux';
import { selectCityAction } from '../../stores/actions';

interface CitiesListProps {
  cities: City[];
  selectedCity: City | null;
}

export const CitiesList = ({
  cities,
  selectedCity,
}: CitiesListProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={classNames('locations__item-link', 'tabs__item', selectedCity?.name === city.name ? 'tabs__item--active' : undefined)}
            href="#"
            onClick={() => dispatch(selectCityAction(city))}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
