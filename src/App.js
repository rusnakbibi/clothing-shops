import { Routes, Route } from 'react-router-dom';

import { HomePage, Nav, SignInPage } from './routes';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default App;
