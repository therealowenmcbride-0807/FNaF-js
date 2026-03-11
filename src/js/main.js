var night = 1;
var nightLength = 2970;  // in seconds
var time = 0;
var locations = ["office", "left_door", "right_door", "CAM01", "CAM02", "CAM03", "CAM04", "CAM05", "CAM06", "CAM07", "CAM08", "CAM09", "CAM10"];
var view = locations[0];
var power = 100;
var powerUsage = 0;
var animatronicLevels = [1,1,1,1]   // Freddy, Bonnie, Chica, Foxy
var viewState = 0;  // 0 = office, 1 = camera, 2 = left door, 3 = right door

function updateTime() {
    document.getElementById("real-time").innerText = (time*10).toFixed(2);
    time += 1/2970
    if (time <= (1/6) * nightLength) {
        document.getElementById("time").innerText = "12 AM";
    } else if (time <= (2/6) * nightLength) {
        document.getElementById("time").innerText = "1 AM";
    } else if (time <= (3/6) * nightLength) {
        document.getElementById("time").innerText = "2 AM";
    } else if (time <= (4/6) * nightLength) {
        document.getElementById("time").innerText = "3 AM";
    } else if (time <= (5/6) * nightLength) {
        document.getElementById("time").innerText = "4 AM";
    } else if (time <= nightLength) {
        document.getElementById("time").innerText = "5 AM";
    } else {
        alert("6 AM! You survived the night!");
    }
}

function updatePower() {
    power -= (0.25+(0.25*powerUsage)/(time*nightLength))/500;
    document.getElementById("power").innerText = "Power: " + Math.max(0, Math.min(100, power)).toFixed(0) + "%";
}

setInterval(updateTime, 1);
setInterval(updatePower, 1);