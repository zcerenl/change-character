// variables
const heroImage = document.querySelector("#hero");
const jinxBtn = document.querySelector(".jinx-button");
const akaliBtn = document.querySelector(".akali-button");

jinxBtn.addEventListener("click", function () {
  heroImage.src = "jinx.png";
});
akaliBtn.addEventListener("click", function () {
  heroImage.src = "akali.png";
});

// akaliBtn.addEventListener("click", function () {
//   akaliBtn.classList.toggle("active");
//   if (akaliBtn.classList.contains("active")) {
//     akaliBtn.innerHTML = "Akali";
//     heroImage.src = "akali.png";
//   } else {
//     akaliBtn.innerHTML = "Jinx";
//     heroImage.src = "jinx.png";
//   }
// });
