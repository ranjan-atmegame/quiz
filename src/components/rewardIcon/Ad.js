'use client';
import { useEffect, useRef } from 'react';
import styles from './pub.module.css';

export default function Ad() {
  const modalRef = useRef();
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.setAttribute('data-type', 'reward');
    }
  }, []);

  const dismissAd = () => {
    dismissRewardedAd();
  };

  return (
    <div id="modal" className={styles.modal} ref={modalRef}>
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
