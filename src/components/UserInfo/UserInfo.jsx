import styles from './userInfo.module.css';

const UserInfo = ({ email }) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__aboutContainer}>
        <p className={styles.userInfo__aboutText}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, 
          включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. 
          Он помогает клиентам лучше понимать структуру рисков их бизнеса, 
          улучшать процессы за счет применения новейших технологий и увеличивать продажи, 
          используя самые современные аналитические инструменты.
        </p>
        <p>
          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. 
          Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, 
          что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, 
          что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
        </p>
        <p>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. 
          Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, 
          а также инвестором других бизнес-проектов.
        </p>
      </div>
      <ul className={styles.userInfo__contacts}>
        <li className={styles.userInfo__contactItem}>
          <span className={styles.userInfo__contactItemIcon}></span>
          <p className={styles.userInfo__contactItemText}>+7(954)333-44-55</p>
        </li>
        <li className={styles.userInfo__contactItem}>
          <span className={styles.userInfo__contactItemIcon}></span>
          <p className={styles.userInfo__contactItemText}>{email}</p>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
