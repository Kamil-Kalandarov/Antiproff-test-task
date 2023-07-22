import styles from './userCard.module.css';

const UserCard = ({ name, avatar }) => {
  return (
      <li className={styles.userCard}>
        <img className={styles.userCard__avatar} src={avatar} alt="#"/>
        <p className={styles.userCard__name}>{name}</p>
      </li>
  );
};

export default UserCard;
