'use client';
import { formatNumber } from '@/utils';
import CoinIcon from '@/components/coin';
import { stage, box, bounce } from '@/components/submit/playNow.module.css';

export default function ContestInfo({ contest }) {
  return (
    <>
      <div className={stage}>
        <div className={`${box} ${bounce}`}>
          <h3>{contest.name}</h3>
        </div>
      </div>

      <h2>
        {`Play and Win ${formatNumber(contest.winningCoins)} `}
        <CoinIcon className="medium" />
      </h2>
    </>
  );
}
