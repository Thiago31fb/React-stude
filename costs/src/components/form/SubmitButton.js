import styles from "./SubmitButton.module.css";

const SubmitButton = ({ text}) => {
  return (
    <div className={styles.form_control}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};

export default SubmitButton;

