window.addEventListener("load", () => {

const hero = document.querySelector(".hero-content");

setTimeout(() => {
hero.classList.add("show");
}, 300);

});


/* BACK TO TOP BUTTON */

const topBtn = document.getElementById("topBtn");

window.onscroll = function() {

if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}

};


topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});