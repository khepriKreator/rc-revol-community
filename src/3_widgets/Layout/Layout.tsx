import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
