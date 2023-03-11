import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { UserPage } from './pages/UserPage/UserPage';
import { UserDetailsPage } from './pages/UserDetailsPage/UserDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
