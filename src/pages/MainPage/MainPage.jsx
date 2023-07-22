import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './mainPage.module.css';
import { getUsers, showMoreUsers } from '../../services/actions/users';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { propsText } from '../../constans/propsText';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {

  const { users, usersCount, totalUsersCount } = useSelector(store => store.users);

  /* const isAuthorized = useSelector(store => store.auth.isAuthorized);
  console.log(isAuthorized); */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(usersCount))
  }, []);

  const onShowMoreUsers = (usersCount) => {
    dispatch(showMoreUsers(usersCount))
  };

  const usersCards = users.map(user => <NavLink key={user.id} to={`/users/${user.id}`}><UserCard id={user.id} name={user.first_name} avatar={user.avatar}/> </NavLink>);

  return (
    <div className={styles.mainPage}>
      <Header title={propsText.maintTitle} text={propsText.mainText} />
      <ul className={styles.mainPage__users}>{usersCards}</ul>
        {usersCount >= totalUsersCount 
          ? null
          : <button className={styles.mainPage__button} onClick={() => onShowMoreUsers(usersCount)}>Показать еще</button>
        }
    </div>
  );
};
