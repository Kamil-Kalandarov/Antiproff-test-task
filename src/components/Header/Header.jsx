import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { logout } from '../../services/actions/auth';
import User from '../User/User';
import { ReactComponent as ExitIcon } from '../../images/exit-icon.svg';
import { ReactComponent as BackArrowIcon } from '../../images/back-arrow.svg';

const Header = ({ title, text, avatar }) => {

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logout())
  };

    if(avatar) {
      return (
        <header className={styles.header_type_user}>
          <div className={styles.header__buttonContainer}>
            <Link className={styles.header__buttonBack_type_small} to={'/users'}>
              <BackArrowIcon />
            </Link>
            <Link className={styles.header__buttonBack} to={'/users'}>Назад</Link>
          </div>
          <User title={title} text={text} avatar={avatar} />
          <div className={styles.header__buttonContainer}>
            <Link className={styles.header__button_type_small} onClick={exit} to={'/login'}>
              <ExitIcon />
            </Link>
            <Link className={styles.header__button} onClick={exit} to={'/login'}>Выход</Link>
          </div>
        </header>
      );
    }

    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>{title}</h1>
          <p className={styles.header__text}>{text}</p>
        </div>
        <div className={styles.header__buttonContainer}>
          <Link className={styles.header__button_type_small} onClick={exit} to={'/login'}>
            <ExitIcon />
          </Link>
          <Link className={styles.header__button} onClick={exit} to={'/login'}>Выход</Link>
        </div>
      </header>
    )
};

export default Header;
