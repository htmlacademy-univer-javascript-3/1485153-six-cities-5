import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import type { OffersSortType } from '../../types/state';
import { setOfferSortType } from '../../stores/actions';

const SORT_TYPES: OffersSortType[] = [
  'popularity',
  'priceAsc',
  'priceDesc',
  'ratingDesc',
];

const SORT_TYPE_DESCRIPTIONS: Record<OffersSortType, string> = {
  popularity: 'Popular',
  priceAsc: 'Price: low to high',
  priceDesc: 'Price: high to low',
  ratingDesc: 'Top rated first',
};

export const SortOffersOptions = () => {
  const [open, setOpen] = useState(false);
  const sortType = useAppSelector((state) => state.offersSortType);
  const dispatch = useAppDispatch();

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const selectSortType = useCallback((newSortType: OffersSortType) => {
    dispatch(setOfferSortType(newSortType));
    setOpen(false);
  }, [dispatch]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOpen}
      >
        {SORT_TYPE_DESCRIPTIONS[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', open ? 'places__options--opened' : undefined)}>
        {SORT_TYPES.map((currentSortType) => (
          <li
            key={currentSortType}
            className={classNames('places__option', sortType === currentSortType ? 'places__option--active' : undefined)}
            tabIndex={0}
            onClick={() => selectSortType(currentSortType)}
          >
            {SORT_TYPE_DESCRIPTIONS[currentSortType]}
          </li>
        ))}
      </ul>
    </form>
  );
};
