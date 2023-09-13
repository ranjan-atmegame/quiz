console.log('add loaded in case of unfilled');

window.googletag = window.googletag || { cmd: [] };
window.googletag.cmd.push(function () {
  window.googletag
    .defineSlot(
      '/21619656201/Atmequiz_Filled',
      [300, 250],
      document.querySelector('#addDivClass').value
    )
    .addService(window.googletag.pubads());
  window.googletag.enableServices();
  window.googletag.display(document.querySelector('#addDivClass').value);
});
