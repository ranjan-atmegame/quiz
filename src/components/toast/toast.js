import styles from './toast.module.css';
const Toast = () => {
  //   function myFunction() {
  //     var x = document.getElementById('snackbar');
  //     x.className = 'show';
  //     setTimeout(function () {
  //       x.className = x.className.replace('show', '');
  //     }, 3000);
  //   }

  return (
    <>
      <div className={`${styles.toast} ${styles.show}`}>
        Some text some message..
      </div>
    </>
  );
};

export default Toast;
