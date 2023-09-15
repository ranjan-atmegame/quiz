import CustomeCheck from '../ui/custome-check/customeCheck';
import styles from './bonusModal.module.css';
import Image from 'next/image';

export default function BonusModal({ onClose, handleClick }) {
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
          <h2>Great!</h2>
          {/* <h2 className={styles.wrong}>Oops!</h2> */}
          <h3>You Won 200 Coins </h3>
          <p>Watch video to win more 100 coins</p>
          <div className={styles.lisBonusModaltSec}>
            <div className={styles.listCheck}>
              <button className={styles.reportBtn} onClick={handleClick}>
                <Image
                  src="/img/videoIcon.svg"
                  width={30}
                  height={30}
                  alt="Get More Coins"
                />
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
