$(() => {
  let size = 50;
  let increment = 10;
  let intervalDuration = 250;
  let growInterval;
  let numOfCircles = 1;
  let colors = [
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];

  begin();

  function begin() {
    start();
    setupEventHandlers();
  }

  function setupEventHandlers() {
    const circles = $(".circle");
    for (let circle of circles) {
      circle.onclick = hideCircle;
      circle.on;
    }

    $("#btn")[0].onclick = btnClickHandler;
  }

  function btnClickHandler() {
    size = parseInt($("#width")[0].value);
    increment = parseInt($("#growthAmount")[0].value);
    intervalDuration = parseInt($("#growRate")[0].value);
    numOfCircles = parseInt($("#number")[0].value);
    //cleanup
    cleanupCircles();
    begin();
  }

  function cleanupCircles() {
    const container = $("#container")[0];
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function start() {
    showCircles();
    if (growInterval) clearInterval(growInterval);
    growInterval = setInterval(growCircle, intervalDuration);
  }
  function showCircles() {
    const container = $("#container")[0];
    for (let i = 0; i < numOfCircles; i++) {
      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.backgroundColor = colors[i % colors.length];
      circle.style.top = getRandomIntegerWithLimit(window.innerHeight) + "px";
      circle.style.left = getRandomIntegerWithLimit(window.innerWidth) + "px";
      container.appendChild(circle);
    }
  }
  function hideCircle() {
    $("#container")[0].removeChild(this);
  }
  function growCircle() {
    const circles = $(".circle");
    for (let circle of circles) {
      let currentTop = parseInt(circle.style.top.replace("px", ""));
      let currentLeft = parseInt(circle.style.left.replace("px", ""));
      circle.style.top = currentTop - increment / 2 + "px";
      circle.style.left = currentLeft - increment / 2 + "px";
      circle.style.width = size + "px";
      circle.style.height = size + "px";
    }
    size += increment;
  }
  function getRandomIntegerWithLimit(limit) {
    let randomInt = Math.floor(Math.random() * limit);
    let adjustedInt = randomInt;
    if (adjustedInt > limit - size) {
      adjustedInt = limit - size;
    }
    return adjustedInt;
  }
});
