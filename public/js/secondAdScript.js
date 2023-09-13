console.log('add loaded in case of unfilled');

let addDivClassName = document.querySelector('#addDivClass').value;
console.log({ addDivClassName });

window.googletag = window.googletag || { cmd: [] };
window.googletag.cmd.push(function () {
  window.googletag
    .defineSlot('/21619656201/Atmegame_Filled', [300, 250], addDivClassName)
    .addService(window.googletag.pubads());
  window.googletag.enableServices();
  window.googletag.display(addDivClassName);
});
