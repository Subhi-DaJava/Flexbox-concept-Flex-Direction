function setFlex() {
  const el = document.querySelector('.container');
  const newSetting = el.style.flexDirection === 'column' ? 'row' : 'column';
  const vAxis = newSetting === 'row' ? 'Cross Axis' : 'Main Axis';
  const hAxis = newSetting === 'column' ? 'Cross Axis' : 'Main Axis';
  el.style.flexDirection = newSetting;
  document.querySelector('#vertical-axis').textContent = vAxis;
  document.querySelector('#horizontal-axis').textContent = hAxis;
  document.querySelector('span').textContent =`flex-direction: ${newSetting}`;
}
