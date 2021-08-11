document.querySelector(".refuse").addEventListener("mouseover", function () {
  this.style.transform = `translate(${Math.random() * 200}px, ${
    Math.random() * 200
  }px)`;
  this.style.margin = "0 -200px 0 0";
});
document.querySelector(".refuse").addEventListener("mouseleave", function () {
  this.style.margin = " 0";
});
document.querySelector(".refuse").addEventListener("click", function () {
  this.style.transform = `translate(${Math.random() * 200}px, ${
    Math.random() * 200
  }px)`;
  this.style.margin = "0 0 0 0";
});
document.querySelector(".accept").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".popup button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".heart-hide").style.display = "block";
});
