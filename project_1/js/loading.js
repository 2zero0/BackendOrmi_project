// 로딩중 표시 함수
export function LoadingWithMask() {
  const containerDisable = document.getElementsByClassName("container");
  for (let i = 0; i < containerDisable.length; i++) {
    containerDisable[i].style.display = "none";
  }

  let mask = document.createElement("div");
  mask.id = "mask";
  mask.style.position = "absolute";
  mask.style.zIndex = "9000";
  mask.style.backgroundColor = "#000000";
  mask.style.display = "none";
  mask.style.left = "0";
  mask.style.top = "0";

  let loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";
  let img = document.createElement("img");
  img.src = "img/cooking.gif";
  img.style.position = "relative";
  img.style.display = "block";
  img.style.margin = "100px auto 20px";
  img.style.width = "500px";
  img.style.height = "500px";
  loadingImg.appendChild(img);

  let message = document.createElement("p");
  message.textContent = "요리 구상중입니다 1분만 기다려주세요!";
  message.style.textAlign = "center";
  message.style.fontFamily = "NeoDunggeunmo";
  message.style.fontSize = "large";
  message.style.border = "5px solid white";
  message.style.borderRadius = "20px";
  message.style.color = "white";
  message.style.backgroundColor = "#2eb7b7";
  message.style.padding = "20px";
  message.style.width = "600px";
  message.style.height = "80px";
  message.style.margin = "auto";
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
