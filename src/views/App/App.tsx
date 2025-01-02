import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Login } from '../Login/Login';
import { Favorites } from '../Favorites/Favorites';
import { Offer } from '../Offer/Offer';
import { NotFound } from '../NotFound/NotFound';
import { getRoute } from '../../utils/routes';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';

interface AppProps {
  cardsCount: number;
}

export const App = ({ cardsCount }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        path={getRoute('/')}
        element={<Main cardsCount={cardsCount} />}
      />
      <Route
        path={getRoute('/login')}
        element={<Login />}
      />
      <Route
        path={getRoute('/favorities')}
        element={(
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        )}
      />
      <Route
        path={`${getRoute('/offer')}/:id`}
        element={<Offer />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
);