import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './app.module.css';
import { USERS_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../constans/rotes';
import { MainPage } from '../pages/MainPage/MainPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { UserPage } from '../pages/UserPage/UserPage';
import { userAuthCheck } from '../services/actions/auth';
import NotFoundPage from '../pages/NotFound/NotFound';

const App = () => {

  const dispatch = useDispatch();

  const { isAuthorized } = useSelector(store => store.auth);

  const token = localStorage.getItem('token')

  const isAuthCheck = (token) => {
    if(token) {
      dispatch(userAuthCheck(token))
    }
  };

  useEffect(() => {
    isAuthCheck(token)
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        { isAuthorized 
          ? <>
              <Route path={USERS_ROUTE} element={<MainPage />} />
              <Route path={USER_ROUTE} element={<UserPage />} />
              <Route path={'*'} element={<Navigate to={USERS_ROUTE} />} />
            </>
          : <>
              <Route path={LOGIN_ROUTE} element={<LoginPage />} />
              <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
              <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} />} />
            </>
        }
      </Routes>
    </div>
  );
};

export default App;
