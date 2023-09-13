import { useEffect, useState } from 'react';

export default function RewardAdX() {
  const [addEvent, setAddEvent] = useState();

  useEffect(() => {
    googletag = window.googletag || { cmd: [] };

    let rewardedSlot;
    // let adEvent = null;
    googletag.cmd.push(function () {
      rewardedSlot = googletag.defineOutOfPageSlot(
        '/21619656201/Atmegame_RewardedNew',
        googletag.enums.OutOfPageFormat.REWARDED
      );

      console.log('1 Load slot');
      // Slot returns null if the page or device does not support rewarded ads.
      if (rewardedSlot) {
        console.log('2 Load slot');
        rewardedSlot.addService(googletag.pubads());

        googletag
          .pubads()
          ?.addEventListener('rewardedSlotReady', function (event) {
            adEvent = event;
          });

        googletag
          .pubads()
          .addEventListener('rewardedSlotClosed', dismissRewardedAd);

        googletag
          .pubads()
          .addEventListener('rewardedSlotGranted', function (event) {
            console.log('3 rewardedSlotGranted');

            // Set event
            setAddEvent(event);

            // Automatically close the ad by destroying the slot.
            // Remove this to force the user to close the ad themselves.
            dismissRewardedAd();
          });

        googletag.enableServices();
        googletag.display(rewardedSlot);
      }
    });

    function dismissRewardedAd() {
      googletag.destroySlots([rewardedSlot]);
    }

    // function rewardAdX() {
    //   console.log('rewardAdX called...');
    //   adEvent.makeRewardedVisible();
    // }
  }, []);

  if (!addEvent) {
    return null;
  }

  return adEvent;
}
