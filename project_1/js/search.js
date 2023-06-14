import { data1 } from "./data.js";
import { LoadingWithMask, closeLoadingWithMask } from "./loading.js";
import { chatGptAPI } from "./openApi.js";
import { goHome } from "./index.js";

const form = document.getElementById("myForm");
const textarea = document.getElementById("myTextarea");

// 이벤트 핸들러 - submit 이벤트 발생 시
// 1. 로딩중 화면 표시 위해 loading.js의 LoadingWithMask, closeLoadingWithMask 함수 호출
// 2. 사용자 입력 값 로컬스토리지 저장
// 3. data 배열에 입력값 추가
// 4. openApi.js의 chatGptAPI 함수 호출
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 방지

  LoadingWithMask(); // 로딩중 표시 함수 호출

  setTimeout(function () {
    closeLoadingWithMask(); // 1분 후에 로딩중 제거 함수 호출
  }, 60000);

  // 입력값을 로컬 스토리지에 저장
  let userInputData = textarea.value;
  localStorage.setItem("inputValue", userInputData);

  // textarea란 초기화
  textarea.value = "";

  data1.push({
    role: "user",
    content: userInputData,
  });

  // chatGptAPI 함수 호출
  chatGptAPI();
});

// 이벤트 핸들러 - logo-img의 클릭 이벤트 발생 시
// 페이지 이동 위해 index.js의 goHome함수 호출
document.querySelector(".logo-img").addEventListener("click", goHome);
