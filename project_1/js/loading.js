// 로딩중 표시 함수
export function LoadingWithMask() {
  const containerDisable = document.getElementsByClassName("container");
  for (let i = 0; i < containerDisable.length; i++) {
    containerDisable[i].style.display = "none";
  }

  let mask = document.createElement("div");
  mask.id = "mask";
  mask.classList.add("loading-mask");

  let loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";

  let img = document.createElement("img");
  img.src = "img/cooking.gif";
  img.classList.add("loading-img");

  loadingImg.appendChild(img);

  let message = document.createElement("p");
  message.textContent = "요리 구상중입니다 1분만 기다려주세요!";
  message.classList.add("loading-message");

  loadingImg.appendChild(message);

  document.body.appendChild(mask);
  document.body.appendChild(loadingImg);

  let maskHeight = document.documentElement.scrollHeight;
  let maskWidth = document.documentElement.clientWidth;

  mask.style.width = maskWidth + "px";
  mask.style.height = maskHeight + "px";
  mask.style.opacity = "0.1";

  mask.style.display = "block";
  loadingImg.style.display = "block";
}

// 로딩중 제거 함수
export function closeLoadingWithMask() {
  let mask = document.getElementById("mask");
  let loadingImg = document.getElementById("loadingImg");
  if (mask && loadingImg) {
    mask.style.display = "none";
    loadingImg.style.display = "none";
    mask.parentNode.removeChild(mask);
    loadingImg.parentNode.removeChild(loadingImg);
  }
}
