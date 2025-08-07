const mainCup = document.getElementById("main-cup");
const cupOptions = document.querySelectorAll(".cups img");

cupOptions.forEach(cup =>{
  cup.addEventListener("click", () =>{
    mainCup.style.opacity = 0;

    setTimeout(() =>{
      mainCup.src = cup.src;

      mainCup.style.opacity = 1;
    },300)
  });
});
