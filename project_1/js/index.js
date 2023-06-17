// 이벤트 핸들러 - chef-icon의 클릭 이벤트 발생 시 함수(search.html로 페이지 전환) 호출
const chefIcon = document.querySelector(".chef-icon01");

if (chefIcon) {
  chefIcon.addEventListener("click", function () {
    location.href = "search.html";
  });
}

// 이벤트 핸들러 - logo-img의 클릭 이벤트 발생 시 함수(index.html로 페이지 전환) 호출
const logoImg = document.querySelector(".logo-img");
logoImg.addEventListener("click", goHome);

// 로고 클릭 시 페이지 이동 함수
export function goHome() {
  location.href = "index.html";
}
