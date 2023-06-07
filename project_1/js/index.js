// chef-icon 클릭 시 search.html로 페이지 전환을 위한 함수
function goToSearchPage() {
  window.location = "search.html";
}

// 이벤트 핸들러 - 클릭 이벤트 발생 시 함수(화면 전환) 호출
document.querySelector(".chef-icon").addEventListener("click", goToSearchPage);
