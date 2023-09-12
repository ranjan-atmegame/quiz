googletag = window.googletag || { cmd: [] };

var rewardedSlot;
googletag.cmd.push(function () {
  rewardedSlot = googletag.defineOutOfPageSlot(
    '/21619656201/Atmegame_RewardedNew',
    googletag.enums.OutOfPageFormat.REWARDED
  );

  console.log({ rewardedSlot });
  // Slot returns null if the page or device does not support rewarded ads.
  if (rewardedSlot) {
    rewardedSlot.addService(googletag.pubads());

    console.log('addEventListener: rewardedSlotReady');
    console.log(googletag.pubads());
    console.log('END=========================');
    googletag.pubads()?.addEventListener('rewardedSlotReady', function (event) {
      console.log('rewardedSlotReady');
      const displayAdButton = document.getElementById('watchAdButton');
      console.log({ displayAdButton });

      if (displayAdButton) {
        displayAdButton.onclick = function () {
          console.log('display ad on Button click.');
          event.makeRewardedVisible();
          displayModal();
        };
      } else {
        console.log('button not found');
      }
      // document.getElementById('watchAdButton').onclick = function () {
      //   event.makeRewardedVisible();
      //   displayModal();
      // };

      displayModal('reward', 'Watch an ad to receive a special reward?');
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

        var reward = event.payload;
        displayModal(
          'grant',
          'You have been rewarded ' + reward.amount + ' ' + reward.type + '!'
        );
      });

    googletag.enableServices();
    googletag.display(rewardedSlot);
  }
});

function dismissRewardedAd() {
  displayModal();
  googletag.destroySlots([rewardedSlot]);
}

function displayModal(type, message) {
  var modal = document.getElementById('modal');
  modal.removeAttribute('data-type');

  if (type) {
    document.getElementById('modalMessage').textContent = message;
    modal.setAttribute('data-type', type);
  }
}
