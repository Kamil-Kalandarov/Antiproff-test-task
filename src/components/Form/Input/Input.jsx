import styles from './input.module.css';

const Input = ({ 
  fieldName, 
  id, 
  type, 
  name, 
  placeholder, 
  value, 
  onChange,
  onBlur, 
  error 
}) => {
  return (
    <div className={styles.inputSection}>
      <span className={styles.input__name}>{fieldName}</span>
      <input 
        className={styles.input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder} 
        value={value} 
        onChange={(event) => onChange(event)} 
        onBlur={(event) => onBlur(event)}
      />
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  )
};

export default Input;