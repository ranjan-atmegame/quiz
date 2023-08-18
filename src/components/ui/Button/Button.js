import Link from "next/link";
import styles from "./button.module.css";
import Icon from "../icon";

const Button = ({ href, text, btnSize, btnColor, btnRadius, btnClick, btnIconUrl }) => {
  return (
    <button href={href} onClick={btnClick} className={`${styles.btn} ${styles[btnSize]}  ${styles[btnRadius]} ${styles[btnColor]}`}>
      {btnIconUrl &&  
          <Icon
              src={btnIconUrl}
              width="18"
              height="18"
              alt="Calender"
              iconClass={styles.btnIcon}
          />} {text}
    </button>
  );
};

export default Button;
