import Image from 'next/image';
import { updateRewardCoins } from './api';

export default function RewardIcon({ setDisplay }) {
  const updateReward = () => {
    updateRewardCoins();
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
