'use client';
import Image from 'next/image';
import { showRewardAd } from '@/utils';
import { updateCoins } from '@/api/auth';
import { BONUS_COINS } from '@/utils/Constant';
import styles from './rewardIcon.module.css';
// import { updateRewardCoins } from './api';

export default function RewardIcon({ setDisplay }) {
  // const updateReward = () => {
  //   updateRewardCoins();
  //   setDisplay(false);
  // };

  const updateReward = () => {
    showRewardAd((result) => {
      console.log('Testing reward Ad: ');
      console.log(result);
      if (result?.status === 'filled') {
      } else {
        displayAd();
      }

      updateCoins(BONUS_COINS);
    });
  };

  return (
    <div
      className={`${styles.floatingIcon} ${styles.floatingIcon}`}
      onClick={updateReward}
    >
      {/* <Image
        src="/img/freeCoins.svg"
        alt="free coins"
        title="free coins"
        height={86}
        width={86}
      /> */}
    </div>
  );
}
