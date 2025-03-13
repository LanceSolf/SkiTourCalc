function calculateTime() {
    let distance = document.getElementById("distance").value;
    let elevation = document.getElementById("elevation").value;
    let result = document.getElementById("result");

    if (distance === "" || elevation === "") {
        result.innerHTML = "Please enter both values!";
        return;
    }

    // Basic hiking time formula (example: 4 km/hr + 1 hr per 300m ascent)
    let timeHours = (distance / 4) + (elevation / 300);

    result.innerHTML = `Estimated time: ${timeHours.toFixed(2)} hours`;
}
