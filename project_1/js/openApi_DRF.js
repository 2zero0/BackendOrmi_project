import { data1 } from "./data.js";

const url = `http://127.0.0.1:8000/mychatbot/`;

// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//       const cookies = document.cookie.split(';');
//       for (let i = 0; i < cookies.length; i++) {
//           const cookie = cookies[i].trim();
//           if (cookie.substring(0, name.length + 1) === (name + '=')) {
//               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//               break;
//           }
//       }
//   }
//   return cookieValue;
// }

// const csrftoken = getCookie('csrftoken');

// chatGptAPI를 이용하여 입력 값에 대한 결과 값 로컬스토리지 저장 후 페이지 전환 함수
export function chatGptAPI_DRF() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'X-CSRFToken': csrftoken
    },
    // credentials: "include",
    body: JSON.stringify({ prompt: data1 }),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      // 결과 값을 로컬 스토리지에 저장
      localStorage.setItem("resultValue", res.choices[0].message.content);

      // 페이지 이동
      location.href = "result.html";

      // 응답 결과를 콘솔에 출력
      // console.log('Response:', res.choices[0].message.content);
    })
    .catch((error) => {
      console.error(error);
    });
}
