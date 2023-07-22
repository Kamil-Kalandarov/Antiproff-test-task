import styles from './user.module.css';

const User = ({ avatar, title, text  }) => {
  return (
    <div className={styles.user}>
      <img className={styles.user__avatar} src={avatar} alt="#"/>
      <div className={styles.user__title}>
        <p className={styles.user__firsName}>{title}</p>
        <p className={styles.user__lastName}>{text}</p>
      </div>
    </div>
  );
};

export default User;
