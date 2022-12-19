$(() => {
  setupEventHandlers();
});

function setupEventHandlers() {
  $("#boundary1").mouseover(youlose);
  $(".boundary").mouseover(youlose);
  $("#start").mouseover(start);
}

function youlose() {
  $(".boundary").addClass("youlose");
}

function start() {
  $(".boundary").removeClass("youlose");
}
