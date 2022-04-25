// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function () {
  $(".category-btn").click(function () {
    $(".drop-categories").slideToggle("fast")
  });
});

document.getElementsByClassName("open-mobile-left")[0].addEventListener("click", () => {
  document.getElementsByClassName("left-menu")[0].style.visibility = "visible";
  let left_menu = document.getElementsByClassName("left-menu")[0].style.width = "100%";
});


document.getElementById("close-mobile-left").addEventListener("click", () => {
  document.getElementsByClassName("left-menu")[0].style.width = "0";
  document.getElementsByClassName("left-menu")[0].style.visibility = "hidden";
});




document.getElementById("mobile-myBtn").addEventListener("click", () => {
  document.getElementsByClassName("mobile-modal-content")[0].style.display = "block";
  document.getElementsByClassName("modal-bcg")[0].style.display = "block";
});

document.getElementById("close-mobile-modal-btn").addEventListener("click", () => {
  document.getElementsByClassName("mobile-modal-content")[0].style.display = "none";
  document.getElementsByClassName("modal-bcg")[0].style.display = "none";
});


window.onclick = function(event) {
  if (event.target == document.getElementsByClassName("modal-bcg")[0]) {
    modal.style.display = "none";
    document.getElementsByClassName("mobile-modal-content")[0].style.display = "none";
    document.getElementsByClassName("modal-bcg")[0].style.display = "none";
  }
}


// document.getElementsByClassName("mobile-category-btn")[0].addEventListener("click", () => {
//   document.getElementsByClassName("mobile-categories")[0].style.maxHeight = "0px";

// });

$(document).ready(function () {
  $(".mobile-category-btn").click(function () {
    $(".mobile-categories").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".mobile-fruits").click(function () {
    $("#lol").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".mobile-home").click(function () {
    $(".mobile-homes").slideToggle("fast")
  });
});


$(document).ready(function () {
  $(".plus1").click(function () {
    $(".drop-ul1").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".plus2").click(function () {
    $(".drop-ul2").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".plus3").click(function () {
    $(".drop-ul3").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".plus4").click(function () {
    $(".drop-ul4").slideToggle("fast")
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.getElementsByClassName("filter")[0].addEventListener("click", () => {
    document.getElementsByClassName("mobile-filter")[0].style.visibility = "visible";
    document.getElementsByClassName("mobile-filter")[0].style.width = "100%";
});

document.getElementById("close-mobile-filter").addEventListener("click", () => {
    document.getElementsByClassName("mobile-filter")[0].style.visibility = "hidden";
    document.getElementsByClassName("mobile-filter")[0].style.width = "0";
});