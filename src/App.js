import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  Nav,
  AuthenticationPage,
  ShopPage,
  CheckOutPage,
} from './routes';

const App = () => {
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
