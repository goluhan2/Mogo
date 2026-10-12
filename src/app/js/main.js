const buttons = document.querySelectorAll(".container-service .dropdown_btn");
const panels = document.querySelectorAll(".container-service .dropdown_info");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.querySelector(button.dataset.tab);
    const wasOpen = button.classList.contains("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
    panels.forEach((item) => item.classList.remove("active"));

    if (!wasOpen && panel) {
      button.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      panel.classList.add("active");
    }
  });
});

const panelsReviews = document.querySelectorAll(".reviews_cart");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showReview(index) {
  current = (index + panelsReviews.length) % panelsReviews.length;

  panelsReviews.forEach((panel, i) => {
    panel.hidden = i !== current;
  });

  dots.forEach((dot, i) => {
    dot.setAttribute("aria-selected", i === current);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showReview(i));
});

document.querySelector(".reviews_btn.left")
  .addEventListener("click", () => showReview(current - 1));

document.querySelector(".reviews_btn.right")
  .addEventListener("click", () => showReview(current + 1));

showReview(0);

const panelReviewsNext=document.querySelectorAll(".reviews_cart_next");
const dotsNext=document.querySelectorAll(".dot_next");
let currentNext=0;
function showReviewNext(indexNext){
  currentNext = (indexNext + panelReviewsNext.length)%panelReviewsNext.length;
  panelReviewsNext.forEach((panelNext,iNext)=>{
panelNext.hidden = iNext !==currentNext;
  });
  dotsNext.forEach((dotNext,iNext)=>{
    dotNext.setAttribute("aria-selected", iNext===currentNext);
  });
}
dotsNext.forEach((dotNext, iNext)=> {
  dotNext.addEventListener("click", ()=> showReviewNext(iNext));
});
document.querySelector(".reviews_btn_next.left")
.addEventListener("click",()=>showReviewNext(currentNext - 1));
document.querySelector(".reviews_btn_next.right")
.addEventListener("click",()=>showReviewNext(currentNext + 1));
showReviewNext(0);

const burgerBtn = document.getElementById("burgerBtn")
burgerBtn.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("open")
    document.querySelector(".burger_btn").classList.toggle("active")
})