import { showRewardAd } from '@/utils';
import { updateCoins } from '@/api/auth';
import { BONUS_COINS } from '@/utils/Constant';

export const updateRewardCoins = (coins = BONUS_COINS) => {
  // showRewardAd((result) => {
  //   if (result?.status === 'viewed') {
  //     //
  //   } else if (result?.status === 'frequencyCapped') {
  //     // Display other ad
  //     displayAd();
  //   }

  //   // updateCoins(coins);
  // });

  showRewardAd((result) => {
    console.log('Testing reward Ad: ');
    console.log(result);
    if (result?.status === 'filled') {
    } else {
      // Display other ad
      displayAd();
    }

    updateCoins(coins);
  });
};
