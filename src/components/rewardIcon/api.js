import { showRewardAd } from '@/utils';
import { updateCoins } from '@/api/auth';
import { DEFAULT_COIN } from '@/utils/Constant';

export const updateRewardCoins = (coins = DEFAULT_COIN) => {
  showRewardAd((result) => {
    setDisplay(false);
    if (result?.status === 'viewed') {
      //
    } else if (result?.status === 'frequencyCapped') {
      // Display other ad
      displayAd();
    }

    updateCoins(coins);
  });
};
