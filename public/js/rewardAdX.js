googletag = window.googletag || { cmd: [] };

let rewardedSlot;
let adEvent = null;

function initializeRewardAdX() {
  googletag.cmd.push(function () {
    rewardedSlot = googletag.defineOutOfPageSlot(
      '/21619656201/Atmegame_RewardedNew',
      googletag.enums.OutOfPageFormat.REWARDED
    );

    // Slot returns null if the page or device does not support rewarded ads.
    if (rewardedSlot) {
      rewardedSlot.addService(googletag.pubads());

      googletag
        .pubads()
        ?.addEventListener('rewardedSlotReady', function (event) {
          adEvent = event;

          // 1) Display Ad on Button Click
          // const displayAdButton = document.getElementById('watchAdButton');
          // console.log({ displayAdButton });

          // if (displayAdButton) {
          //   displayAdButton.onclick = function () {
          //     console.log('display ad on Button click.');
          //     event.makeRewardedVisible();
          //     displayModal();
          //   };
          // } else {
          //   console.log('button not found');
          // }

          // document.getElementById('watchAdButton').onclick = function () {
          //   event.makeRewardedVisible();
          //   displayModal();
          // };

          // displayModal('reward', 'Watch an ad to receive a special reward?');
        });

      googletag
        .pubads()
        .addEventListener('rewardedSlotClosed', dismissRewardedAd);

      googletag
        .pubads()
        .addEventListener('rewardedSlotGranted', function (event) {
          // Automatically close the ad by destroying the slot.
          // Remove this to force the user to close the ad themselves.
          dismissRewardedAd();

          // var reward = event.payload;
          // displayModal(
          //   'grant',
          //   'You have been rewarded ' + reward.amount + ' ' + reward.type + '!'
          // );
        });

      googletag.enableServices();
      googletag.display(rewardedSlot);
    }
  });
}
initializeRewardAdX();

function dismissRewardedAd() {
  googletag.destroySlots([rewardedSlot]);

  console.log('destroyed...');
  initializeRewardAdX();
}

function rewardAdX() {
  console.log('rewardAdX called...');
  adEvent?.makeRewardedVisible();
}
