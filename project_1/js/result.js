import { formatCookingList } from "./lineHighlight.js";
import { goHome } from "./index.js";

// 이벤트 핸들러 - 문서 완전히 로드 완료 시(DOMContentLoaded)
// 1. 로컬스토리지에 저장된 결과 값 가져와 변수에 저장
// 2. 결과 값 하이라이트 효과 위해 lineHighlight.js의 formatCookingList 함수 호출
// 3. 요리 목록 출력
document.addEventListener("DOMContentLoaded", function () {
  // 입력값
  //const inputValue = localStorage.getItem("inputValue");
  // console.log(inputValue);

  // 출력값
  const resultValue = localStorage.getItem("resultValue");
  // console.log(resultValue);

  // 요리 목록 -> 하이라이팅 효과 함수 호출
  const formattedRecipeList = formatCookingList(resultValue);

  // 요리 목록 출력
  const pElement = document.createElement("p");
  pElement.innerHTML = formattedRecipeList;
  document.getElementById("resultAnswer").appendChild(pElement);
});

// 당근 아이콘 클릭 시 페이지 이동
document.querySelector(".carrot-icon").addEventListener("click", (e) => {
  window.location = "search.html";
});

// 이벤트 핸들러 - logo-img의 클릭 이벤트 발생 시
// 페이지 이동 위해 index.js의 goHome함수 호출
document.querySelector(".logo-img").addEventListener("click", goHome);
