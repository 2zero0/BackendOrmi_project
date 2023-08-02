import { data1 } from "./data.js";

const url = `http://127.0.0.1:8000/mychatbot/`;
const authToken = localStorage.getItem('authToken');

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
      "Authorization": `Bearer ${authToken}` // 인증 정보 헤더 포함
      // 'X-CSRFToken': csrftoken
    },
    // credentials: "include",
    body: JSON.stringify({ prompt: data1 }),
    redirect: "follow",
  })
    .then((res) => {
      if (res.status === 429) {
        alert("하루 챗봇 사용 한도(5번)를 초과했습니다.");
        location.href = "search.html";
        return;
      } else {
        return res.json();
      }
    })
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
