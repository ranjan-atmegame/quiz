import { showRewardAd } from '@/utils';
// import { updateCoins } from '@/api/auth';
// import { BONUS_COINS } from '@/utils/Constant';

export const updateRewardCoins = () => {
  showRewardAd((result) => {
    if (result?.status === 'viewed') {
      //
    } else if (result?.status === 'frequencyCapped') {
      // Display other ad
      // displayAd();
    }

    // updateCoins(coins);
  });
};
