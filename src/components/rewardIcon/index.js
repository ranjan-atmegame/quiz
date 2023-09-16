'use client';
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { showRewardAd } from '@/utils';
import { updateRewardCoins } from '@/api/auth';
import { BONUS_COINS } from '@/utils/Constant';
import styles from './rewardIcon.module.css';
// import { updateRewardCoins } from './api';
// import rewardAdX from '@/components/ad/GPTAd';

export default function RewardIcon({ setDisplay }) {
  // const router = useRouter();
  // const updateReward = () => {
  //   updateRewardCoins();
  //   setDisplay(false);
  // };

  const updateReward_v1 = () => {
    showRewardAd((result) => {
      console.log(result);
      if (result?.status !== 'viewed') {
        rewardAdX();
      }

      updateRewardCoins(BONUS_COINS);
      // router.refresh();
      setDisplay();
    });
  };

  const updateReward = () => {
    rewardAdX();
  };

  return (
    <div className={`${styles.floatingIcon}`} onClick={updateReward}>
      <Image
        src="/img/freeCoins7.svg"
        alt="free coins"
        title="free coins"
        height={76}
        width={76}
      />
    </div>
  );
}
