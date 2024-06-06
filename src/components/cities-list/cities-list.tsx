import cn from 'classnames';
import { CityName } from '../../const';
import { changeCity } from '../../store';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type CitiesListProps = {
  selectedCity: CityName;
};

function CitiesList({ selectedCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const cities: CityName[] = [
    CityName.Paris,
    CityName.Cologne,
    CityName.Brussels,
    CityName.Amsterdam,
    CityName.Hamburg,
    CityName.Dusseldorf,
  ];

  const handleCityChange = (
    evt: React.MouseEvent<HTMLAnchorElement>,
    city: CityName
  ) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <Link to="#"
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': selectedCity === city,
                })}
                data-testid={city}
                onClick={(evt) => handleCityChange(evt, city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const CitiesListMemo = memo(CitiesList);

export default CitiesListMemo;
