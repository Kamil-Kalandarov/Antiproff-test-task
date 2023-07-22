import styles from './form.module.css';

const Form = ({ title, onSubmit, children, buttonName, disabled }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.form__title}>{title}</h2>
      {children}  
      <button type='submit' className={styles.form__button} disabled={disabled} onClick={onSubmit}>{buttonName}</button>
    </form>
  );
};

export default Form;
