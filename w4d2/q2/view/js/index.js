$(() => {
  const completed = (response) => {
    let data = response.data;
    let q = Math.floor(Math.random() * data.length);
    $("#question").val("");
    $("#question").attr("placeholder", data[q]);
    $("#question").focus(() => {
      this.select();
    });
  };
  const foundErr = (err) => {
    console.log(err);
    $("#question").val("We enountered an error with your query...");
    $("#question").focus(() => {
      this.select();
    });
  };
  $("#8ball").submit((e) => {
    e.preventDefault();
    let question = $("#question").val();
    console.log(question);
    fetch("/8ball")
      .then((res) => res.json())
      .then(completed)
      .catch(foundErr);
  });
});
