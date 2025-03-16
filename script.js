function syncElevations() {
  const startEl = document.getElementById('startElevation').value;
  if (document.getElementById('sameAsStart').checked) {
    document.getElementById('finishElevation').value = startEl;
  }
}

function toggleHorizontalSpeed() {
  const checkbox = document.getElementById('noHorizontalSpeed');
  const distanceInput = document.getElementById('distance');
  distanceInput.disabled = checkbox.checked;
  if (checkbox.checked) {
    distanceInput.value = '';
  }
}

function calculateTime() {
  const startElevation = parseFloat(document.getElementById('startElevation').value);
  const highPoint = parseFloat(document.getElementById('highPoint').value);
  const finishElevation = parseFloat(document.getElementById('finishElevation').value);
  const distanceInput = document.getElementById('distance');
  const distance = distanceInput.disabled ? 0 : parseFloat(distanceInput.value);
  const ascentRate = parseFloat(document.getElementById('ascentRate').value);
  const descentRate = parseFloat(document.getElementById('descentRate').value);
  const horizontalSpeed = parseFloat(document.getElementById('horizontalSpeed').value);
  const noHorizontalSpeed = document.getElementById('noHorizontalSpeed').checked;
  
  if (isNaN(startElevation) || isNaN(highPoint) || isNaN(finishElevation)) {
    alert("Please enter valid numerical values for elevation.");
    return;
  }
  
  const ascentElevation = highPoint - startElevation;
  const descentElevation = highPoint - finishElevation;
  
  const ascentTime = ascentElevation / ascentRate;
  const descentTime = descentElevation / descentRate;
  const horizontalTime = noHorizontalSpeed ? 0 : (isNaN(distance) ? 0 : distance / horizontalSpeed);
  
  const totalTime = ascentTime + descentTime + horizontalTime;
  
  function formatTime(hours) {
    const totalMinutes = Math.round(hours * 60);
    const hrs = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return hrs + "h " + mins + "m";
  }
  
  document.getElementById('result').innerHTML = 
    "Ascent Time: " + formatTime(ascentTime) + "<br>" +
    "Descent Time: " + formatTime(descentTime) + "<br>" +
    (noHorizontalSpeed ? "" : "Horizontal Time: " + formatTime(horizontalTime) + "<br>") +
    "<strong>Total Estimated Time: " + formatTime(totalTime) + "</strong>";
}
