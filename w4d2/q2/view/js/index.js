$(() => {
  const completed = (response) => {
    let data = response.data;
    let q = Math.floor(Math.random() * data.length);
    $("#question").val(data[q]);
    $("#question").select();
    $("#question").focus(function () {
      this.select();
    });
  };
  const foundErr = (err) => {
    console.log(err);
    $("#question").val("We enountered an error with your query...");
    $("#question").select();
    $("#question").focus(function () {
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
