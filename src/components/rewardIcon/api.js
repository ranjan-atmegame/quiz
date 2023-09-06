import { showRewardAd } from '@/utils';
import { updateCoins } from '@/api/auth';
import { DEFAULT_COIN } from '@/utils/Constant';

export const updateRewardCoins = () => {
  showRewardAd((result) => {
    if (result?.status === 'viewed') {
      //
    } else if (result?.status === 'frequencyCapped') {
      // Display other ad
      // displayAd();
    }

    updateCoins(DEFAULT_COIN);
  });
};
