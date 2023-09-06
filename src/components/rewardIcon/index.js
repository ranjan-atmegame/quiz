import Image from 'next/image';
import { updateRewardCoins } from './api';
import { updateCoins } from '@/api/auth';
import { BONUS_COINS } from '@/utils/Constant';

export default function RewardIcon({ setDisplay }) {
  const updateReward = () => {
    updateRewardCoins();
    updateCoins(BONUS_COINS);
    setDisplay(false);
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
