const body = document.querySelector("body");
const btn = document.querySelectorAll(".button");
btn.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    const val = e.target.id;
    body.style.backgroundColor = val;
  });
});
