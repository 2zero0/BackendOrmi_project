import { data1 } from "./data.js";

const form = document.getElementById("myForm");
const textarea = document.getElementById("myTextarea");

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 이벤트 핸들러 - submit 이벤트 발생 시
// 1. 로딩중 화면 출력 함수, 로딩중 화면 제거 함수 호출
// 2. 사용자 입력 값(냉장고 재료) 로컬스토리지 저장
// 3. data 배열에 입력값 추가
// 4. chatGptAPI 함수 호출
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 방지

  /*로딩중 화면*/
  LoadingWithMask(); // 로딩중 표시 함수 호출

  setTimeout(function () {
    closeLoadingWithMask(); // 1분 후에 로딩중 제거 함수 호출
  }, 60000);

  // 출력 확인용
  // console.log(textarea.value);

  // 입력값을 로컬 스토리지에 저장
  let userInputData = textarea.value;
  localStorage.setItem("inputValue", userInputData);

  // textarea란 초기화
  // userInputData = "";

  data1.push({
    role: "user",
    content: userInputData,
  });

  chatGptAPI();
});

// chatGptAPI를 이용하여 입력 값에 대한 출력 값 로컬스토리지 저장 후 페이지 전환 함수
function chatGptAPI() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data1),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      // 출력 확인용
      //console.log("res: ", res);
      //console.log("출력값: ", res.choices[0].message.content);

      // 출력값을 로컬 스토리지에 저장
      localStorage.setItem("resultValue", res.choices[0].message.content);

      // 페이지 이동
      window.location = "result.html";
    });
}

// 로딩중 표시 함수
function LoadingWithMask() {
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
function closeLoadingWithMask() {
  let mask = document.getElementById("mask");
  let loadingImg = document.getElementById("loadingImg");
  if (mask && loadingImg) {
    mask.style.display = "none";
    loadingImg.style.display = "none";
    mask.parentNode.removeChild(mask);
    loadingImg.parentNode.removeChild(loadingImg);
  }
}
