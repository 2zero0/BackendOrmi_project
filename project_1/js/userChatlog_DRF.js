// 채팅 내역 조회
export function userChatLogs() {
  const authToken = localStorage.getItem('authToken');

  fetch("http://127.0.0.1:8000/chatlog/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    },
  })
  .then((res) => res.json())
  .then((data) => {
    // 채팅 내역을 로컬 스토리지에 저장
    localStorage.setItem("chatLogs", JSON.stringify(data));

    // chatlog.html 페이지로 이동
    location.href = "user_chatlog_list.html";
  })
  .catch((error) => {
    console.error(error);
  });
}