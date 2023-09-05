import { useEffect } from 'react';
import styles from './toast.module.css';

const Toast = ({ message }) => {
  useEffect(() => {
    const x = document.getElementById('snackbar');
    x.classList.add(styles.show);
    setTimeout(() => {
      x.classList.remove(styles.show);
    }, 3000);
  }, []);

  return (
    <>
      <div id="snackbar" className={`${styles.toast} ${styles.hide}`}>
        {message}
      </div>
    </>
  );
};

export default Toast;
