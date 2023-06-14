// 로딩중 표시 함수
export function LoadingWithMask() {
  const containerDisable = document.getElementsByClassName("container");
  for (let i = 0; i < containerDisable.length; i++) {
    containerDisable[i].style.display = "none";
  }

  const footerDisable = document.getElementsByClassName("footer");
  for (let i = 0; i < footerDisable.length; i++) {
    footerDisable[i].style.display = "none";
  }

  const mask = document.createElement("div");
  mask.id = "mask";
  mask.classList.add("loading-mask");

  const loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";

  const img = document.createElement("img");
  img.src = "img/cooking.gif";
  img.classList.add("loading-img");

  loadingImg.appendChild(img);

  const message = document.createElement("p");
  message.textContent = "요리 구상중입니다 1분만 기다려주세요!";
  message.classList.add("loading-message");

  loadingImg.appendChild(message);

  document.body.appendChild(mask);
  document.body.appendChild(loadingImg);

  const maskHeight = document.documentElement.scrollHeight;
  const maskWidth = document.documentElement.clientWidth;

  mask.style.width = maskWidth + "px";
  mask.style.height = maskHeight + "px";
  mask.style.opacity = "0.1";

  mask.style.display = "block";
  loadingImg.style.display = "block";
}

// 로딩중 제거 함수
export function closeLoadingWithMask() {
  const mask = document.getElementById("mask");
  const loadingImg = document.getElementById("loadingImg");

  if (mask && loadingImg) {
    mask.style.display = "none";
    loadingImg.style.display = "none";

    mask.parentNode.removeChild(mask);
    loadingImg.parentNode.removeChild(loadingImg);
  }
}
