import { searchImages, searchRecipe } from "./openApi.js";

// X 아이콘 클릭 시 모달 제거
const xImg = document.querySelector(".close-button");
xImg.addEventListener("click", () => {
  modal.classList.remove("show");
  body.style.overflow = "auto";
});

// 모달 컨트롤을 위한 변수
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");

// 모달 출력
btnOpenPopup.addEventListener("click", () => {
  window.scrollTo(0, 0);
  modal.classList.toggle("show");

  if (modal.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});

// 모달과 body 스크롤 제어
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.toggle("show");

    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});

// 모달 - 이미지 출력
// 돋보기 아이콘 클릭 시 호출
document.querySelector(".search-icon").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;

  // 검색어 미입력시 alert
  if (!query) {
    alert("검색어를 입력해주세요!");
    return;
  }

  const imgBox = document.querySelector(".img-box");
  imgBox.innerHTML = ""; // 이전의 출력 값을 초기화

  // openApi.js의 searchImages함수 호출
  // 반환된 배열 값 img태그로 하나씩 감싸 img-box안에 출력
  searchImages(query)
    .then((images) => {
      images.forEach((image) => {
        const imageElement = document.createElement("img");
        imageElement.src = image.src;
        imgBox.appendChild(imageElement);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

// 모달 - 레시피 출력
// 돋보기 아이콘 클릭 시 호출
document.querySelector(".search-icon").addEventListener("click", () => {
  const inputRecipeName = document.getElementById("searchInput").value;

  // 안내 문구 (입력 값 포함)
  document.querySelector(
    ".recipe-box"
  ).innerHTML = `<p class='guide05'>잠시만 기다리시면 이 곳에 <b>'${inputRecipeName}'</b> 레시피가 출력됩니다!</p>`;

  // 로딩 스피너
  const spinnerBox = document.createElement("div");
  spinnerBox.classList.add("spinner");
  document.querySelector(".modal-main").appendChild(spinnerBox);

  // openApi.js의 searchImages함수 호출
  // 반환 값 recipe-box에 출력
  searchRecipe(inputRecipeName)
    .then((formattedStr) => {
      spinnerBox.style.display = "none";
      document.querySelector(".recipe-box").innerHTML = formattedStr;
    })
    .catch((error) => {
      console.error(error);
    });
});
