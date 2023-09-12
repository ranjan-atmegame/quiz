'use client';
import { useEffect, useRef } from 'react';

export default function Ad() {
  const adRef = useRef();

  useEffect(() => {
    if (adRef.current) {
      const googletag = window.googletag || { cmd: [] };

      var rewardedSlot;
      googletag.cmd.push(function () {
        rewardedSlot = googletag.defineOutOfPageSlot(
          '/21619656201/Atmegame_RewardedNew',
          googletag.enums.OutOfPageFormat.REWARDED
        );

        // Slot returns null if the page or device does not support rewarded ads.
        if (rewardedSlot) {
          rewardedSlot.addService(googletag.pubads());

          console.log('First==============');
          googletag
            .pubads()
            .addEventListener('rewardedSlotReady', function (event) {
              console.log('rewardedSlotReady........................');
              document.getElementById('watchAdButton').onclick = function () {
                event.makeRewardedVisible();
                displayModal();
              };

              displayModal(
                'reward',
                'Watch an ad to receive a special reward?'
              );
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
                'You have been rewarded ' +
                  reward.amount +
                  ' ' +
                  reward.type +
                  '!'
              );
            });

          googletag.enableServices();
          googletag.display(rewardedSlot);
        }
      });
    }
  }, []);

  return (
    <div id="modal" className="modal">
      <div className="modalDialog">
        <p id="modalMessage"></p>

        <span className="grantButtons">
          <input
            type="button"
            onClick={() => console.log('...')}
            value="Close"
          />
        </span>
        <br />
        <br />
        <br />

        <span className="rewardButtons">
          <div>
            <input type="button" id="watchAdButton" ref={adRef} value="Yes" />
          </div>
          <div>
            <input
              type="button"
              onClick={() => console.log('...')}
              value="No"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
