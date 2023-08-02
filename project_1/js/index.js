import { displayLoggedInUser } from "./userInfo_DRF.js";
import { userChatLogs } from "./userChatlog_DRF.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// 사용자 로그인시 정보, 로그아웃, 채팅내역 관련
function init() {
  const authToken = localStorage.getItem("authToken");

  // 로그인된 유저 정보 출력
  displayLoggedInUser(authToken);

  // log 아이콘 클릭 시
  const logFileImg = document.querySelector(".log-file-img");
  if (logFileImg) {
    logFileImg.addEventListener("click", function () {
      // 채팅 내용 조회
      userChatLogs();
    });
  }

  // exit 아이콘 클릭 시
  const exitImg = document.querySelector(".exit-img");
  if (exitImg) {
    exitImg.addEventListener("click", function () {
      // 토큰 제거
      // 로그아웃
      localStorage.removeItem("authToken");

      // 로그인 화면으로 이동
      location.href = "user_register.html";
    });
  }

  // 이벤트 핸들러 - chef-icon의 클릭 이벤트 발생 시 함수(search.html로 페이지 전환) 호출
  const chefIcon = document.querySelector(".chef-icon01");

  if (chefIcon) {
    chefIcon.addEventListener("click", function () {
      location.href = "search.html";
    });
  }

  // 이벤트 핸들러 - logo-img의 클릭 이벤트 발생 시 함수(index.html로 페이지 전환) 호출
  const logoImg = document.querySelector(".logo-img");
  if (logoImg) {
    logoImg.addEventListener("click", goHome);
  }
}

// 로고 클릭 시 페이지 이동 함수
export function goHome() {
  location.href = "index.html";
}