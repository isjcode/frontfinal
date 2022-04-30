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


if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
let basket = JSON.parse(localStorage.getItem("basket"));


let add_items = () => {
    for (const prod of basket) {
        const div = document.createElement("div");
        let subtotal = parseFloat(prod.count) * parseFloat(prod.price.slice(1));
        let div_text = `
    <div data-id="${prod.id}" class="cart-item">
        <div  class="product">
            <img src='${prod.link}'>
            <p> ${prod.name} </p>
        </div>
        <div class="price">
            ${prod.price}
        </div>
        <div class="quantity">
            <input class="decrease" class="decrease" type="button" value="-">
            <p> ${prod.count} </p>
            <input id="increase" class="increase" type="button" value="+">
        </div>
        <div class="subtotal">
            ${subtotal.toFixed(2)}
        </div>
        <input class="delete-item" value="X" type="button">
    </div>`;

        div.innerHTML = div_text;


        document.getElementsByClassName("main")[0].children[0].children[1].appendChild(div);
    }
}

add_items();
document.getElementsByClassName("product-quantity")[0].innerHTML = basket.length;

if (JSON.parse(localStorage.getItem("basket").length) > 0) {
    for (const e of document.getElementsByClassName("decrease")) {
        e.addEventListener("click", (e) => {
            let basket = JSON.parse(localStorage.getItem("basket"));
            let prod_id = e.target.parentElement.parentElement.getAttribute("data-id");
            for (const prod of basket) {
                if (prod_id == prod.id) {
                    if (prod.count > 1) {
                        prod.count--;
                    }
                    console.log(prod.count);
                }
            }

            localStorage.setItem("basket", JSON.stringify(basket));
            document.getElementsByClassName("main")[0].children[0].children[1].innerHTML = "";
            location.reload();
        });
    }
}
if (JSON.parse(localStorage.getItem("basket").length) > 0) {
    for (const e of document.getElementsByClassName("increase")) {
        e.addEventListener("click", (e) => {
            console.log("DSA");
            let basket = JSON.parse(localStorage.getItem("basket"));
            let prod_id = e.target.parentElement.parentElement.getAttribute("data-id");
            for (const prod of basket) {
                if (prod_id == prod.id) {
                    if (prod.count >= 1) {
                        prod.count++;
                    }
                    console.log(prod.count);
                }
            }

            localStorage.setItem("basket", JSON.stringify(basket));
            document.getElementsByClassName("main")[0].children[0].children[1].innerHTML = "";
            location.reload();
        });
    }
}

document.getElementById("logo").addEventListener("click", () => {
    window.open("index.html", "_self");
    console.log("DS");
});


for (const delete_button of document.getElementsByClassName("delete-item")) {
    delete_button.addEventListener("click", (e) => {
        const prod_id = e.target.parentElement.getAttribute("data-id");

        let basket = JSON.parse(localStorage.getItem("basket"));
        for (let prod of basket) {
            if (prod.id == prod_id) {
                localStorage.setItem("last_deleted", JSON.stringify(prod))
                console.log("here")
                break;
            }
        }
        basket = basket.filter(element => element.id != prod_id);
        localStorage.setItem("basket", JSON.stringify(basket));
        document.getElementsByClassName("main")[0].children[0].children[1].innerHTML = "";
        location.reload();
    });
}

if (localStorage.getItem("last_deleted") != null) {
    document.getElementsByClassName("deleted")[0].innerHTML = `
        <p> ${JSON.parse(localStorage.getItem("last_deleted")).name} has been deleted. <span id="undo"> Undo? </span> </p>
    `
    document.getElementsByClassName("deleted")[0].style.display = "block";
    if (localStorage.getItem("last_deleted") != null) {
        document.getElementById("undo").addEventListener("click", (e) => {
            console.log(e.target.parentElement.parentElement);
            let basket = JSON.parse(localStorage.getItem("basket"));
            let last_deleted = JSON.parse(localStorage.getItem("last_deleted"));
            basket.push(last_deleted);
            localStorage.setItem("basket", JSON.stringify(basket));
            document.getElementsByClassName("main")[0].children[0].style.display = "block";
            document.getElementsByClassName("main")[0].children[1].style.display = "block";
            document.getElementsByClassName("main")[0].children[2].style.display = "none";
            localStorage.removeItem("last_deleted");
            location.reload();
        });
    }
}

let calculate_subtotal = () => {
    let subtotal = 0;

    const basket = JSON.parse(localStorage.getItem("basket"));

    for (const e of basket) {
        subtotal += e.price.slice(1) * e.count;
    }

    document.getElementById("subtotal-number").innerHTML = "$" + parseFloat(subtotal).toFixed(2);
}

calculate_subtotal();

let last_checked = document.getElementById("flat-rate");

for (const delivery_choice of document.getElementsByClassName("delivery-choice")) {
    delivery_choice.addEventListener("change", (e) => {
        if (e.target == last_checked) {
            e.target.checked = true;
            return;
        } else {
            const subtotal = document.getElementById("total").innerHTML.slice(1);
            if (e.target != document.getElementById("flat-rate") && last_checked == document.getElementById("flat-rate")) {
                document.getElementById("total").innerHTML = "$" + (parseFloat(subtotal) - 5).toFixed(2);
            } else if (e.target == document.getElementById("flat-rate")) {
                document.getElementById("total").innerHTML = "$" + (parseFloat(subtotal) + 5).toFixed(2);
            }

            last_checked = e.target;
        }

        for (const d of document.getElementsByClassName("delivery-choice")) {
            d.checked = false;
        }
        e.target.checked = true;
    });
}

if (JSON.parse(localStorage.getItem("basket")).length > 0) {
    const subtotal = document.getElementById("subtotal-number").innerHTML.slice(1);
    document.getElementById("total").innerHTML = "$" + (parseFloat(subtotal) + 5).toFixed(2);
    document.getElementsByClassName("main")[0].children[2].style.display = "none";
} else {
    document.getElementsByClassName("main")[0].children[0].style.display = "none";
    document.getElementsByClassName("main")[0].children[1].style.display = "none";
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