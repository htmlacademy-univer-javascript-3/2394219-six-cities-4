import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoutitesScreen from '../../pages/favourites-screen/favourites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import { Offer } from '../../types/offer';

type AppComponentProps = {
  offers: Offer[];
};

function App({ offers }: AppComponentProps): JSX.Element {
  const favourites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<MainScreen offers = {offers} />}
        />
        <Route
          path={'/login'}
          element={<LoginScreen/>}
        />
        <Route
          path={'/favourites'}
          element={<FavoutitesScreen favourites={favourites}/>}
        />
        <Route
          path={'/offer/:id'}
          element={<OfferScreen offers={offers} />}
        />
        <Route
          path="*"
          element={<ErrorScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
