import classNames from 'classnames';
import { CityName } from '../../types/offer';
import { useAppDispatch } from '../../hooks/redux';
import { selectCityAction } from '../../stores/actions';

interface CitiesListProps {
  cities: CityName[];
  selectedCity: CityName;
}

export const CitiesList = ({
  cities,
  selectedCity,
}: CitiesListProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={classNames('locations__item-link', 'tabs__item', selectedCity === city ? 'tabs__item--active' : undefined)}
            href="#"
            onClick={() => dispatch(selectCityAction(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
