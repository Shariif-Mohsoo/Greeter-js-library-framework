const g = G$("Mohsin", "Rajpoot");
g.greet().setLang("es").greet(true);
// console.log(g);
// lets use our object on the click of the login button
$("#login").click(function () {
  // create a new 'Greetr' object("Lets pretend we know the name for the login")
  const loginGrtr = G$("MUHAMMAD", "MOHSIN");
  $("#logindiv").hide();

  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
