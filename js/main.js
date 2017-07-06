$( ".cross" ).hide();
$( ".menu" ).hide();
$(".alert-cross").click(function() {
  $( ".alert-message" ).hide();
  $(".traffic-1").css("padding-top", '0px');
});
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
