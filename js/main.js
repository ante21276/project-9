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

let tip_data = ["New friend request", "Ante started live video", "Michael tagged you in video."];


let search = document.getElementById("search-users");
let users_list = ["Victoria Chambers", "Dawn Wood", "Dan Oliver", "Dale Byrd"];
let data_list = document.getElementById("users-list");

for (let i = 0; i < users_list.length; i++) {
  let option = document.createElement("option");
  option.value = users_list[i];
  data_list.append(option);
}

// Send message to other users

const send_button = document.getElementById("send-button");
let text_area = document.getElementById("text_area");

send_button.addEventListener("click", () => {
  if (text_area.value && search.value) {
    alert("Your message has been sent!");
    text_area.value = "";
    search.value = "";
  }else {
    alert("You need to enter User and write some message!");
  }
});


// Saving settings in local storage


const save_button = document.getElementById("save-button");
const select_input = document.getElementById("select");
const checkbox_notification = document.getElementById("notification-checkbox");
const checkbox_public = document.getElementById("public-checkbox");

function saveSettings() {
  save_button.addEventListener("click", () => {
    localStorage.setItem("notification_settings", JSON.stringify(checkbox_notification.checked));
    localStorage.setItem("public_settings", JSON.stringify(checkbox_public.checked));
    localStorage.setItem("time_zone", JSON.stringify(select_input.children[select_input.selectedIndex].innerHTML));
  });
  let notification_retrieve = JSON.parse(localStorage.getItem("notification_settings"));
  let public_retrieve = JSON.parse(localStorage.getItem("public_settings"));
  let par = JSON.parse(localStorage.getItem("time_zone"));

  if (par) {
    select_input.children[0].innerHTML = par;
  }
  checkbox_notification.checked = notification_retrieve;
  checkbox_public.checked = public_retrieve;

}
saveSettings();
