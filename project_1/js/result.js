// search.html을 통해 저장된 값을 로컬 스토리지에서 가져와서 출력
document.addEventListener("DOMContentLoaded", function () {
  // 입력값
  const inputValue = localStorage.getItem("inputValue");
  console.log(inputValue);

  // 출력값
  const resultValue = localStorage.getItem("resultValue");
  console.log(resultValue);

  // 요리 목록 출력 - 하이라이팅 효과
  const lines = resultValue.split("\n");
  let formattedString = "";

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== "") {
      const dotIndex = trimmedLine.indexOf(":");
      if (dotIndex !== -1) {
        const number = trimmedLine.substring(0, dotIndex).trim();
        const dish = trimmedLine.substring(dotIndex + 1).trim();
        const formattedLine = `<b class="highlight">${number}:</b> ${dish}`;
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

// 버튼(당근) 클릭 시 페이지 이동
document.querySelector(".buttonImg2").addEventListener("click", (e) => {
  window.location = "search.html";
});

/*모달_레시피 검색*/
// 버튼(X) 클릭 시 모달 제거
const xImg = document.querySelector(".closeButton");
xImg.addEventListener("click", () => {
  modal.classList.remove("show");
  body.style.overflow = "auto";
});

// 모달 컨트롤위한 변수
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
function searchImages() {
  const query = document.getElementById("search-input").value;

  // 검색어 미입력시 alert
  if (!query) {
    alert("검색어를 입력해주세요!");
    return;
  }

  const imgBox = document.querySelector(".imgBox");
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
// 버튼(돋보기) 클릭 시 searchImages() 함수와 동시 호출
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let data = [
  {
    role: "system",
    content:
      "assistant는 요리 전문가이다. 사용자가 만들고 싶은 요리 이름을 입력하면 재료와 조리절차의 형식으로 레시피를 알려준다.",
  },
  {
    role: "user",
    content: "감자전",
  },
  {
    role: "assistant",
    content:
      "-재료: 감자 2개, 소금 약간, 식용유 \n\n-조리 절차: \n1. 감자를 깨끗이 씻은 후 껍질을 벗기고, 얇게 채 썰어주세요.\n2. 썰은 감자에 약간의 소금을 뿌리고 잘 버무려 주세요. 소금이 감자에 고루 묻도록 해야 합니다. \n3. 팬에 식용유를 두르고 중간 불에서 달군 후, 감자를 한 줌씩 집어넣어 동글동글하게 모양을 만들어주세요. \n4. 감자전을 노릇하게 굽고 뒤집어서 양면이 고루 익도록 해주세요. 약 2~3분씩 굽는 것이 좋습니다. \n5. 감자전이 골고루 익으면 접시에 담아서 곁들일 양념과 함께 내놓으면 완성입니다.",
  },
];

function searchRecipe() {
  const inputRecipeName = document.getElementById("search-input").value;
  // 출력 확인용
  // console.log("입력값: ", inputRecipeName);

  // 입력 값 출력 + 안내 메시지
  document.querySelector(
    ".recipeBox"
  ).innerHTML = `<p style='text-align: center'>잠시만 기다리시면 이 곳에 <b style='color: #394049'>'${inputRecipeName}'</b> 레시피가 출력됩니다!</p>`;

  data.push({
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
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      // 출력 확인용
      // console.log("res: ", res);
      // console.log("출력값: ", res.choices[0].message.content);

      const resultRecipe = res.choices[0].message.content;

      // 레시피 출력 - 하이라이팅 효과
      const line_group = resultRecipe.split("\n");
      let formattedStr = "";

      line_group.forEach((line, index) => {
        const trim_line = line.trim();
        if (trim_line !== "") {
          const dotIdx = trim_line.indexOf(":");
          if (dotIdx !== -1) {
            const title = trim_line.substring(0, dotIdx).trim();
            const description = trim_line.substring(dotIdx + 1).trim();
            const format_line = `<br><b class="highlight2">${title}:</b> ${description}`;
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
      document.querySelector(".recipeBox").innerHTML = formattedStr;
    })
    .catch((error) => {
      console.error(error);
    });
}
