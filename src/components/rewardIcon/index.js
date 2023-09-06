'use client';
import Image from 'next/image';
import { showRewardAd } from '@/utils';
import { updateCoins } from '@/api/auth';
import { BONUS_COINS } from '@/utils/Constant';
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
      onClick={updateReward}
      style={{
        position: 'fixed',
        top: '89%',
        right: '5px',
        cursor: 'pointer',
      }}
    >
      <Image
        src="/img/2bicon.png"
        alt="free coins"
        title="free coins"
        height={72}
        width={72}
      />
    </div>
  );
}
