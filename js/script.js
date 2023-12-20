// navbar start
const navbarNav = document.querySelector(".navbar-nav");

//hamburger di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// navbar end

// search start
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const sb = document.querySelector("#search-btn");
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
// search end


// galeri start
const detailModal1 = document.querySelector('#item-detail1');
const button1 = document.querySelector('.cta-detail1');
button1.onclick = (e) => {
  detailModal1.style.display = "flex";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === detailModal1){
    detailModal1.style.display = "none";
  }
};

document.querySelector("#close-icon1").onclick = (e) => {
  detailModal1.style.display = "none";
  e.preventDefault();
};


const detailModal2 = document.querySelector('#item-detail2');
const button2 = document.querySelector('.cta-detail2');
button2.onclick = (e) => {
  detailModal2.style.display = "flex";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === detailModal2){
    detailModal2.style.display = "none";
  }
};

document.querySelector("#close-icon2").onclick = (e) => {
  detailModal2.style.display = "none";
  e.preventDefault();
};
// galeri end


