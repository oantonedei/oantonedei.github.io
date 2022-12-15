$(() => {
  //   $("#boundary1")[0].mouseover(youlose);
  document.getElementById("boundary1").onmouseover = youlose;

  function youlose() {
    let walls = $(".boundary");
    for (let i = 0; i < walls.length; i++) {
      walls[i].addclass = "youlose";
    }
  }
});
