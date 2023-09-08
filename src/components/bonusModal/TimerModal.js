import styles from './bonusModal.module.css';
import Image from 'next/image';

export default function TimerModal({ onClose, handleClick, message = '' }) {
  return (
    <div className={styles.report}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.close} onClick={onClose}></div>
          <Image
            src="/img/coinsBox.svg"
            width={70}
            height={74}
            alt="Get More Coins"
          />
          {/* <Image
            src="/img/wrong_coinsBox.svg"
            width={70}
            height={74}
            alt="Get More Coins"
          /> */}
          {/* <h2>Great!</h2> */}
          <h2 className={styles.wrong}>Oops!</h2>
          <h3>Time Over</h3>
          <p>{message}</p>

          <div className={styles.lisBonusModaltSec}>
            <div className={styles.listCheck}>
              <button className={styles.reportBtn} onClick={handleClick}>
                <Image
                  src="/img/video.svg"
                  width={40}
                  height={40}
                  alt="Get More Coins"
                />
                Continue
              </button>
            </div>
            <p className={styles.bottomTxt}>
              Click on video ad to get more 15 seconds and continue quiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}