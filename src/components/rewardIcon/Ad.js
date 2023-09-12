'use client';
import styles from './pub.module.css';

export default function Ad() {
  const dismissAd = () => {
    dismissRewardedAd();
  };

  return (
    <div id="modal" className={styles.modal}>
      <div className={styles.modalDialog}>
        <p id="modalMessage"></p>

        <span className={styles.grantButtons}>
          <input type="button" onClick={dismissAd} value="Close" />
        </span>

        <span className={styles.rewardButtons}>
          <div>
            <input type="button" id="watchAdButton" value="Yes" />
          </div>
          <div>
            <input type="button" value="No" onClick={dismissAd} />
          </div>
        </span>
      </div>
    </div>
  );
}
