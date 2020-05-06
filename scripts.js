// Write your JavaScript code here.
// Remember to pay attention to page loading!

// let takeOffButton = null;
// let landButton = null;
// let abortMission = null;
// let flightStatus = null;
// let shuttleBackground = null;
// let spaceShuttleHeight = null;
// let upDirection = null;
// let downDirection = null;
// let leftDirection = null;
// let rightDirection = null;
// let rocket = null;
let topAndBottom = 0;
let leftAndRight = 0;

window.addEventListener("load", function() {
    let takeOffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortMission = document.getElementById('missionAbort');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let upDirection = document.getElementById('up');
    let downDirection = document.getElementById('down');
    let leftDirection = document.getElementById('left');
    let rightDirection = document.getElementById('right');
    let rocket = document.getElementById('rocket');


    takeOffButton.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
         if (confirmation === true){
            flightStatus.innerHTML = ("Shuttle in flight.");
         shuttleBackground.style.backgroundColor = "blue";
         spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = ("The shuttle has landed.");
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    abortMission.addEventListener("click", function(){
        let confirmation2 = window.confirm("Confirm that you want to abort the mission.");
         if (confirmation2 === true){
            flightStatus.innerHTML = ("Mission aborted.");
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upDirection.addEventListener("click", function(){
        topAndBottom = Number(topAndBottom) + 10;
        rocket.style.bottom = topAndBottom + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    downDirection.addEventListener("click", function(){
        topAndBottom = Number(topAndBottom) - 10;
        rocket.style.bottom = topAndBottom + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    leftDirection.addEventListener("click", function(){
        leftAndRight = Number(leftAndRight) + 10;
        rocket.style.right = leftAndRight + "px";
    });

    rightDirection.addEventListener("click", function(){
        leftAndRight = Number(leftAndRight) - 10;
        rocket.style.right = leftAndRight + "px";
    });

});
