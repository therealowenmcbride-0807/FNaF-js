var night = 1;
var nightLength = 2970;  // in seconds
var time = 0;
var locations = ["office", "left_door", "right_door", "CAM01", "CAM02", "CAM03", "CAM04", "CAM05", "CAM06", "CAM07", "CAM08", "CAM09", "CAM10"];
var view = locations[0];
var power = 100;
var powerUsage = 1;
var animatronicLevels = [1,1,1,1]   // Freddy, Bonnie, Chica, Foxy
var viewState = 0;  // 0 = office, 1 = camera, 2 = left door, 3 = right door
var leftDoorClosed = false;
var rightDoorClosed = false;

// Stats
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
    power -= 0.0001*(powerUsage*7.5);
    document.getElementById("power").innerText = "Power: " + Math.max(0, Math.min(100, power)).toFixed(0) + "%";
}

function updatePowerUsage() {
    if (powerUsage == 1) {
        document.getElementById("usage").innerHTML = '<span data-color="green">█</span> <span data-color="black">█</span> <span data-color="black">█</span> <span data-color="black">█</span>';
    } else if (powerUsage == 2) {
        document.getElementById("usage").innerHTML = '<span data-color="green">█</span> <span data-color="yellow">█</span> <span data-color="black">█</span> <span data-color="black">█</span>';
    } else if (powerUsage == 3) {
        document.getElementById("usage").innerHTML = '<span data-color="green">█</span> <span data-color="yellow">█</span> <span data-color="orange">█</span> <span data-color="black">█</span>';
    } else if (powerUsage >= 4) {
        document.getElementById("usage").innerHTML = '<span data-color="green">█</span> <span data-color="yellow">█</span> <span data-color="orange">█</span> <span data-color="red">█</span>';
    }
}

// Buttons
function checkLeftDoor() {
    viewState = 2;
    document.getElementById("you-are-in").innerHTML = "You check the left door. Nobody is there.<br>";
    document.getElementById("left-door-btn").style.display = "none";
    document.getElementById("right-door-btn").style.display = "none";
    document.getElementById("camera-btn").style.display = "none";
    document.getElementById("shut-left-door-btn").style.display = "block";
    document.getElementById("go-back-btn").style.display = "block";
}

function checkRightDoor() {
    viewState = 3;
    document.getElementById("you-are-in").innerHTML = "You check the right door. Nobody is there.<br>";
    document.getElementById("left-door-btn").style.display = "none";
    document.getElementById("right-door-btn").style.display = "none";
    document.getElementById("camera-btn").style.display = "none";
    document.getElementById("shut-right-door-btn").style.display = "block";
    document.getElementById("go-back-btn").style.display = "block";
}

function checkCameras() {
    viewState = 1;
    document.getElementById("you-are-in").innerHTML = "You open the camera terminal.<br>";
    document.getElementById("left-door-btn").style.display = "none";
    document.getElementById("right-door-btn").style.display = "none";
    document.getElementById("camera-btn").style.display = "none";
    document.getElementById("go-back-btn").style.display = "block";
}

function goBack() {
    viewState = 0;
    document.getElementById("you-are-in").innerHTML = "You are in the office.<br>";
    document.getElementById("left-door-btn").style.display = "block";
    document.getElementById("right-door-btn").style.display = "block";
    document.getElementById("camera-btn").style.display = "block";
    document.getElementById("shut-left-door-btn").style.display = "none";
    document.getElementById("shut-right-door-btn").style.display = "none";
    document.getElementById("go-back-btn").style.display = "none";
}

function shutLeftDoor() {
    if (leftDoorClosed == false) {
        leftDoorClosed = true;
        document.getElementById("shut-left-door-btn").innerText = "Open Left Door";
        document.getElementById("shut-left-door-btn").style.backgroundColor = "green";
        document.getElementById("shut-left-door-btn").style.border = "4px solid green";
        powerUsage += 1;
    } else {
        leftDoorClosed = false;
        document.getElementById("shut-left-door-btn").innerText = "Shut Left Door";
        document.getElementById("shut-left-door-btn").style.backgroundColor = "red";
        document.getElementById("shut-left-door-btn").style.border = "4px solid red";
        powerUsage -= 1;
    }
}

function shutRightDoor() {
    if (rightDoorClosed == false) {
        rightDoorClosed = true;
        document.getElementById("shut-right-door-btn").innerText = "Open Right Door";
        document.getElementById("shut-right-door-btn").style.backgroundColor = "green";
        document.getElementById("shut-right-door-btn").style.border = "4px solid green";
        powerUsage += 1;
    } else {
        rightDoorClosed = false;
        document.getElementById("shut-right-door-btn").innerText = "Shut Right Door";
        document.getElementById("shut-right-door-btn").style.backgroundColor = "red";
        document.getElementById("shut-right-door-btn").style.border = "4px solid red";
        powerUsage -= 1;
    }
}

setInterval(updateTime, 1);
setInterval(updatePower, 1);
setInterval(updatePowerUsage, 1);