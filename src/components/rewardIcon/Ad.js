'use client';
import styles from './pub.module.css';

export default function Ad() {
  return (
    <div id="modal" className={styles.modal}>
      <div className={styles.modalDialog}>
        <p id="modalMessage"></p>

        <span className={styles.grantButtons}>
          <input type="button" onClick={dismissRewardedAd} value="Close" />
        </span>

        <span className={styles.rewardButtons}>
          <div>
            <input type="button" id="watchAdButton" value="Yes" />
          </div>
          <div>
            <input type="button" value="No" onClick={dismissRewardedAd} />
          </div>
        </span>
      </div>
    </div>
  );
}
