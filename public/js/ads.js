var shouldShowAdOnPlay = true;
let gameStatus = 0;
var firstShowAd = false;
let rewardAds = 0;
let isRewardDisplayed = 0;

if (firstShowAd) {
  console.log('Display Ad on start');
  prerollAd();
} else {
  console.log('Do not display Ad on start');
}

// will pause the game
function pauseGame() {
  console.log('game paused!');
  gameStatus += 1;
}

// will return the game status
function checkGameStatus() {
  return gameStatus;
}

// will reset the game status
function resetGameStatus() {
  console.log('game status reset!');
  gameStatus = 0;
}

function ad_initialise() {
  if (shouldShowAdOnPlay) {
    adConfig({
      sound: 'on',
    });
  }
}

function displayAd(callback) {
  if (shouldShowAdOnPlay) {
    adBreak({
      type: 'next', // ad shows at start of next level
      name: 'restart-game',
      beforeAd: () => {
        pauseGame();
      }, // You may also want to mute the game's sound.
      afterAd: () => {
        resetGameStatus();
        callback({ status: 'viewed' });
      }, // resume the game flow.
    });
    console.log('ads loading');
  }
}

function prerollAd() {
  if (shouldShowAdOnPlay) {
    adBreak({
      type: 'preroll', // ad shows at start of next level
      name: 'loading_afg',
      adBreakDone: () => {
        console.log('preroll');
      },
    });
  }
  console.log('ads loading');
}

function checkRewardStatus() {
  return isRewardDisplayed;
}

function resetRewardStatus() {
  isRewardDisplayed = 0;
}

function rewardAd(_back) {
  if (shouldShowAdOnPlay) {
    adBreak({
      type: 'reward',
      name: 'reward',
      beforeAd: () => {
        console.log('--- Ã¥Â¼â‚¬Ã¥Â§â€¹Ã¥Â±â€¢Ã§Â¤ÂºÃ¥Â¹Â¿Ã¥â€˜Å  ------');
      },
      afterAd: () => {
        console.log('--- Ã¥Â¹Â¿Ã¥â€˜Å Ã¥Â±â€¢Ã§Â¤ÂºÃ¥Â®Å’Ã¦Â¯â€¢ ------');
      },
      afterAd: () => {
        console.log('--- Ã¥Â¹Â¿Ã¥â€˜Å Ã¥Â±â€¢Ã§Â¤ÂºÃ¥Â®Å’Ã¦Â¯â€¢ ------');
      },
      beforeReward: (showAdFn) => {
        showAdFn();
        console.log('--- Ã¥Â¼â‚¬Ã¥Â§â€¹Ã¦â€™Â­Ã¦â€Â¾Ã¥Â¹Â¿Ã¥â€˜Å  ------>');
      },
      adDismissed: () => {
        console.log(
          '--- Ã§â€Â¨Ã¦Ë†Â·Ã¦ÂÂÃ¥â€°ÂÃ¥â€¦Â³Ã©â€”Â­Ã¥Â¹Â¿Ã¥â€˜Å  ------'
        );
        console.log('Dismiss');
      },
      adViewed: () => {
        console.log('--- Ã¥Â¹Â¿Ã¥â€˜Å Ã¦â€™Â­Ã¦â€Â¾Ã¥Â®Å’Ã¦Â¯â€¢ ------');
        // _back && _back({ status: 'viewed' });
        console.log('View');
      },

      adBreakDone: (placementInfo) => {
        console.log(
          'Ã¦â€“Â°Ã§â€°Ë†afgÃ¨Â¾â€œÃ¥â€¡ÂºÃ¤Â¿Â¡Ã¦ÂÂ¯--Ã£â‚¬â€¹' +
            JSON.stringify(placementInfo)
        );

        try {
          console.log('AdBreakDon: ');
          console.log(placementInfo);
          // _back({ status: placementInfo.breakStatus });
          if (placementInfo.breakStatus)
            if (placementInfo.breakStatus !== 'viewed') {
              // this.playExcitationVideo2(_back);
            } else {
              isRewardDisplayed = 1;
            }

          // Ad callback on success
          const adViewedStatus = ['viewed', 'filled'];
          if (adViewedStatus.includes(placementInfo.breakStatus)) {
            _back && _back({ status: 'viewed' });
          } else {
            _back && _back({ status: 'na' });
          }
        } catch (e) {
          _back && _back({ status: 'error' });
        }
      },
    });
  }
  console.log('ads loading');
}
