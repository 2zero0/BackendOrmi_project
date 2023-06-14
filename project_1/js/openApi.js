import { data1 } from "./data.js";
import { data2 } from "./data.js";
import { formatRecipeText } from "./lineHighlight.js";

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// chatGptAPI를 이용하여 입력 값에 대한 결과 값 로컬스토리지 저장 후 페이지 전환 함수
export function chatGptAPI() {
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
      // 결과 값을 로컬 스토리지에 저장
      localStorage.setItem("resultValue", res.choices[0].message.content);

      // 페이지 이동
      location.href = "result.html";
    });
}

/*모달*/
// 모달 - 이미지 출력 (카카오 API)
export function searchImages(query) {
  return fetch(`https://dapi.kakao.com/v2/search/image?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: "KakaoAK 9cafd6a49ad0561ac99a151b58f2d4b4",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // 검색된 이미지 중 9개 뽑아 배열에 저장 후 반환
      const images = data.documents.slice(0, 9).map((document) => ({
        src: document.thumbnail_url,
        width: "130px",
        height: "130px",
      }));
      return images;
    });
}

// 모달 - 레시피 출력 (chatGPT API)
export function searchRecipe(inputRecipeName) {
  data2.push({
    role: "user",
    content: inputRecipeName,
  });

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      const resultRecipe = res.choices[0].message.content;

      // 레시피 -> 하이라이팅 효과 함수 호출
      const formattedRecipeText = formatRecipeText(resultRecipe);

      return formattedRecipeText;
    });
}
