import Image from 'next/image';
import styles from '@/components/bonusModal/bonusModal.module.css';

export default function Modal({ onClose, handleClick, message = '' }) {
  return (
    <div className={styles.report}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.close} onClick={onClose}></div>
          <Image
            src="/img/wrong_coinsBox.svg"
            width={70}
            height={74}
            alt="Get More Coins"
          />
          <h2 className={styles.wrong}>Oops!</h2>
          <h3>Something went wrong!</h3>
          <p>{message}</p>

          <div className={styles.lisBonusModaltSec}>
            <div className={styles.listCheck}>
              <button className={styles.reportBtn} onClick={handleClick}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
