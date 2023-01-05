const btnreply = document.querySelectorAll(".btn-reply");
const btncomment = document.querySelectorAll(".comment");

const likebtn = document.querySelectorAll(".btn-like");

likebtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.children[0].classList.replace("fa-thumbs-up", "fa-check");
  });
});

btnreply.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    btncomment[index].classList.toggle("d-none");
  });
});
