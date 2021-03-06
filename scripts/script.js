(() => {
  if (JSON.parse(localStorage.getItem("basket")) == null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  console.log("SD");
  document.getElementsByClassName("product-quantity")[0].innerHTML = JSON.parse(localStorage.getItem("basket")).length;
})();



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

$('.single-item').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
});

var countDownDate = new Date("May 17, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = `<span class="time"> ${days} </span> : <span class="time">${hours} </span> : <span class='time'>${minutes} </span> : <span class="time"> ${seconds} </span>`;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


$('.slider_products11').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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


window.onclick = function (event) {
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
  $(".mobile-shop").click(function () {
    $(".mobile-shops").slideToggle("fast")
  });
});

$(document).ready(function () {
  $(".shop-list1").click(function () {
    $(".shop-lists1").slideToggle("fast")
  });
});
$(document).ready(function () {
  $(".shop-list4").click(function () {
    $(".shop-lists4").slideToggle("fast")
  });
});
$(document).ready(function () {
  $(".shop-list3").click(function () {
    $(".shop-lists3").slideToggle("fast")
  });
});
$(document).ready(function () {
  $(".shop-list2").click(function () {
    $(".shop-lists2").slideToggle("fast")
  });
});





$(window).on('resize orientationchange', function () {
  $('.carousel').slick('resize');
});



for (let prod of document.getElementsByClassName("add")) {
  prod.addEventListener("click", (e) => {
    e.stopPropagation();
    const elem = e.target.parentElement.parentElement;
    const prod_id = elem.getAttribute("id");
    const img_link = elem.children[1].src;
    const prod_name = elem.children[2].innerHTML;
    const prod_price = elem.children[5].innerText.split(" ")[1];
    if (localStorage.getItem("basket") == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }

    const basket = JSON.parse(localStorage.getItem("basket"));

    let exists = false;
    let notification = document.getElementById("product_added");
    for (const prod of basket) {
      if (prod.id == prod_id) {
        prod.count++;
        exists = true;
        notification.innerText = `${prod.count} x ${prod.name} has been added to the cart.`
      }
      localStorage.setItem("basket", JSON.stringify(basket));
    }

    if (!exists) {
      basket.push({
        id: prod_id,
        link: img_link,
        name: prod_name,
        count: 1,
        price: prod_price
      })
      localStorage.setItem("basket", JSON.stringify(basket));
      notification.innerText = `1 x ${prod_name} has been added to the cart.`
    }


    console.log(localStorage.getItem("basket"));
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);

  });
}

document.getElementsByClassName("cart-icon")[0].addEventListener("click", () => {
  window.open("basket.html", "_self");
});

document.getElementById("logo").addEventListener("click", () => {
  window.open("index.html", "_self");
});

const products = ["r-product", "left-product", "right-pp", "left-p", "imgg", "right-pp"];


for (const cl of products) {
  for (const prod of document.getElementsByClassName(cl)) {
    prod.addEventListener("click", () => {
      window.open("product.html", "_self");
    });
  }
}

document.getElementById("logo").addEventListener("click", () => {
  window.open("index.html", "_self");
});

document.getElementsByClassName("cart-icon")[0].addEventListener("click", () => {
  window.open("basket.html");
});

document.getElementsByClassName("fa-user")[0].addEventListener("click", () => {
  window.open("login.html", "_self");
});

document.getElementsByClassName("contact")[0].addEventListener("click", () => {
  window.open("contact.html", "_self");
});

document.getElementsByClassName("mobile-search-btn")[0].addEventListener("click", () => {
  let display = getComputedStyle(document.getElementsByClassName("mobile-search")[0]).display;

  if (display == "none") {
    document.getElementsByClassName("mobile-search")[0].style.display = "block";
  } else {
    document.getElementsByClassName("mobile-search")[0].style.display = "none";
  }
});


document.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    document.getElementsByClassName("mobile-header")[0].style.position = "fixed";
    document.getElementsByClassName("mobile-header")[0].style.top = "0";
  }
  else {
    document.getElementsByClassName("mobile-header")[0].style.position = "unset";
  }
});