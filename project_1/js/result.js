import { data2 } from "./data.js";

// search.html을 통해 저장된 값을 로컬 스토리지에서 가져와서 출력
// 이벤트 핸들러 - 문서 완전히 로드 완료 시(DOMContentLoaded)
// 1. 로컬스토리지에 저장된 결과 값 가져와 변수에 저장
// 2. 결과 값을 하이라이팅된 형식으로 변환
// 3. 요리 목록 출력
document.addEventListener("DOMContentLoaded", function () {
  // 입력값
  const inputValue = localStorage.getItem("inputValue");
  // console.log(inputValue);

  // 출력값
  const resultValue = localStorage.getItem("resultValue");
  // console.log(resultValue);

  // 요리 목록 -> 하이라이팅 효과
  const lines = resultValue.split("\n");
  let formattedString = "";

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== "") {
      const dotIndex = trimmedLine.indexOf(":");
      if (dotIndex !== -1) {
        const number = trimmedLine.substring(0, dotIndex).trim();
        const dish = trimmedLine.substring(dotIndex + 1).trim();
        const formattedLine = `<b class="line-highlight01">${number}:</b> ${dish}`;
        formattedString += `${formattedLine}<br>`;
      } else {
        formattedString += `<br>${trimmedLine}<br><br>`;
      }
    }
  });

  // 요리 목록 출력
  const pElement = document.createElement("p");
  pElement.innerHTML = formattedString;
  document.getElementById("resultAnswer").appendChild(pElement);
});

// 당근 아이콘 클릭 시 페이지 이동
document.querySelector(".carrot-icon").addEventListener("click", (e) => {
  window.location = "search.html";
});

/*모달 - 레시피 검색*/
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

// 모달 - 이미지 출력 (카카오 API)
// 돋보기 아이콘 클릭 시 searchRecipe() 함수와 동시 호출

document.querySelector(".search-icon").addEventListener("click", searchImages);
document.querySelector(".search-icon").addEventListener("click", searchRecipe);

function searchImages() {
  const query = document.getElementById("searchInput").value;

  // 검색어 미입력시 alert
  if (!query) {
    alert("검색어를 입력해주세요!");
    return;
  }

  const imgBox = document.querySelector(".img-box");
  imgBox.innerHTML = ""; // 이전의 출력 값을 초기화

  fetch(`https://dapi.kakao.com/v2/search/image?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: "KakaoAK 9cafd6a49ad0561ac99a151b58f2d4b4",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // 출력 확인용
      // console.log(data);
      // console.log(data.documents[0].thumbnail_url);

      // 출력 이미지 9개 생성
      for (let i = 0; i < 9; i++) {
        const imageElement = document.createElement("img");
        imageElement.src = data.documents[i].thumbnail_url;
        imageElement.style.width = "130px";
        imageElement.style.height = "130px";
        imgBox.appendChild(imageElement);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// 모달 - 레시피 출력 (chatGPT API)
// 돋보기 아이콘 클릭 시 searchImages() 함수와 동시 호출
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

function searchRecipe() {
  const inputRecipeName = document.getElementById("searchInput").value;
  // 출력 확인용
  // console.log("입력값: ", inputRecipeName);

  // 입력 값 출력 + 안내 메시지
  document.querySelector(
    ".recipe-box"
  ).innerHTML = `<p style='text-align: center'>잠시만 기다리시면 이 곳에 <b style='color: #394049'>'${inputRecipeName}'</b> 레시피가 출력됩니다!</p>`;

  data2.push({
    role: "user",
    content: inputRecipeName,
  });

  chatGptAPI();
}

function chatGptAPI() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      // 출력 확인용
      // console.log("res: ", res);
      // console.log("출력값: ", res.choices[0].message.content);

      const resultRecipe = res.choices[0].message.content;

      // 레시피 -> 하이라이팅 효과
      const line_group = resultRecipe.split("\n");
      let formattedStr = "";

      line_group.forEach((line, index) => {
        const trim_line = line.trim();
        if (trim_line !== "") {
          const dotIdx = trim_line.indexOf(":");
          if (dotIdx !== -1) {
            const title = trim_line.substring(0, dotIdx).trim();
            const description = trim_line.substring(dotIdx + 1).trim();
            const format_line = `<br><b class="line-highlight02">${title}:</b> ${description}`;
            formattedStr += `${format_line}<br>`;
          } else {
            formattedStr += `${trim_line}<br>`;
          }
        }

        // 마지막 줄에 <br> 삽입
        if (index === line_group.length - 1) {
          formattedStr += "<br>";
        }
      });
      document.querySelector(".recipe-box").innerHTML = formattedStr;
    })
    .catch((error) => {
      console.error(error);
    });
}
