import { useSelector } from 'react-redux';
import styles from './userPage.module.css';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';

export const UserPage = () => {

  const { userId } = useParams();
  const users = useSelector(store => store.users.users);
  const currentsUser = users.find((user) => user.id === Number(userId));

  console.log(currentsUser);
  console.log(typeof userId);

  return (
    <div className={styles.userPage}>
      <Header title={currentsUser?.first_name} text={currentsUser?.last_name} avatar={currentsUser?.avatar} />
      <UserInfo email={currentsUser?.email}/>
    </div>
  );
};
