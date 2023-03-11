import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useParams } from 'react-router-dom';

export const Layout = () => {
  const { id } = useParams();

  return (
    <div>
      <header>{!id && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
