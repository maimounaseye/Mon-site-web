document.addEventListener("DOMContentLoaded", () => {
  const articleA = document.querySelector(".article1");
  const buttonX1 = document.querySelector(".buttonX button");
  const princATC1 = document.querySelector(".ATC1");

  princATC1.addEventListener("click", () => {
    articleA.classList.remove("hidden");
    articleA.style.display = "block";
  });

  buttonX1.addEventListener("click", () => {
    articleA.classList.add("hidden");
    articleA.style.display = "none";
  });
});
