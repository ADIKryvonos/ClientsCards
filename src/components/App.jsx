import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

const Tweets = lazy(() => import('../pages/Tweets'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
