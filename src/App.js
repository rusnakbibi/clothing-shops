import { Routes, Route } from 'react-router-dom';

import { HomePage, Nav, AuthenticationPage, ShopPage } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="auth" element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
