$(() => {
  $("#addtocart").submit((e) => {
    e.preventDefault();
    let id = $("#id").val();
    let qty = $("#qty").val();
    let data = {
      id: id,
      qty: qty,
    };
    fetch("/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  });
  const success = (data) => {
    $(".alert").show();
    $("#qty").val("");
    $("#cartqty").text(data.cartQty);
    setTimeout(() => {
      $(".alert").hide();
    }, 2000);
  };
  const failure = (err) => {
    $("#qty").val("");
    console.log(err);
  };
  const getCart = () => {
    fetch("/getCart")
      .then((res) => res.json())
      .then((data) => {
        $("#cartqty").text(data.qty);
        console.log(data.qty);
      });
  };
  getCart();
});
