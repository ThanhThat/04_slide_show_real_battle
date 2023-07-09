const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentIndex = 0;

const imgList = $$(".img-item > img");
const imgWrap = $(".img-wrap > img");
const prev = $(".prev");
const next = $(".next");

imgList.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    setImageWrap();
  });
});

prev.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex = imgList.length - 1;
  } else {
    --currentIndex;
  }
  setImageWrap();
});

next.addEventListener("click", function () {
  if (currentIndex === imgList.length - 1) {
    currentIndex = 0;
  } else {
    ++currentIndex;
  }
  setImageWrap();
});

function setImageWrap() {
  imgWrap.src = imgList[currentIndex].src;
  $(".img-item.active").classList.remove("active");
  imgList[currentIndex].parentElement.classList.add("active");
}
