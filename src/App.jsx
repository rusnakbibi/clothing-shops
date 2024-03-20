import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from 'actions/user';

import {
  HomePage,
  Nav,
  AuthenticationPage,
  ShopPage,
  CheckOutPage,
} from './routes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="auth" element={<AuthenticationPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
