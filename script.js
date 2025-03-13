function syncElevations() {
  const startEl = document.getElementById('startElevation').value;
  if(document.getElementById('sameAsStart').checked){
    document.getElementById('finishElevation').value = startEl;
  }
}

function toggleHorizontalSpeed() {
  const horizontalSpeedSelect = document.getElementById('horizontalSpeed');
  horizontalSpeedSelect.disabled = document.getElementById('noHorizontalSpeed').checked;
}

function calculateTime() {
  const startElevation = parseFloat(document.getElementById('startElevation').value);
  const highPoint = parseFloat(document.getElementById('highPoint').value);
  const finishElevation = parseFloat(document.getElementById('finishElevation').value);
  const distance = parseFloat(document.getElementById('distance').value);
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
  const horizontalTime = noHorizontalSpeed ? 0 : distance / horizontalSpeed;
  
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
