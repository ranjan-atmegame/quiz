import styles from './button.module.css';

const Button = ({
  href,
  text,
  btnSize,
  btnColor,
  btnRadius,
  btnClick,
  btnIconUrl,
}) => {
  return (
    <button
      href={href}
      onClick={btnClick}
      className={`${styles.btn} ${styles[btnSize]}  ${styles[btnRadius]} ${styles[btnColor]}`}
    >
      {text}
    </button>
  );
};

export default Button;
