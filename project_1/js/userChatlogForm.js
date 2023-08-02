import { formatDate } from "./formatDate.js";

// 로컬 스토리지에서 채팅 내역 불러오기
const chatLogs = JSON.parse(localStorage.getItem("chatLogs"));
// 채팅 내역 목록 함수 호출
if (document.getElementById("chatlog-container")) {
  loadChatLogList();
}

// 채팅 내역 상세 보기 계산하기
if (document.getElementById("chat-detail")) {
  loadChatLogDetail();
}

// 채팅 내역 목록 조회 함수
function loadChatLogList() {
  const chatlogContainer = document.getElementById("chatlog-container");
  chatLogs.forEach(log => {
    // const logDetail = document.createElement("p");
    // logDetail.innerHTML = `질문: ${log.prompt}, 시간: ${log.timestamp}`;
    // chatlogContainer.appendChild(logDetail);

    const logRow = document.createElement("tr");

    const logQuestion = document.createElement("td");
    // logQuestion.innerHTML = log.prompt;
    logQuestion.innerHTML = `<a href="user_chatlog_detail.html?logId=${log.id}">${log.prompt}</a>`;
    logRow.appendChild(logQuestion);

    const logTimestamp = document.createElement("td");
    const formattedTimestamp = formatDate(log.timestamp);
    logTimestamp.innerHTML = formattedTimestamp;
    logRow.appendChild(logTimestamp);

    chatlogContainer.appendChild(logRow);
  });
}


// 채팅 내역 상세보기 함수
function loadChatLogDetail() {
  const logId = parseInt(new URLSearchParams(window.location.search).get("logId"));

  const chatData = chatLogs.find(log => log.id === logId)
  if (chatData) {
    document.getElementById("prompt-text").innerHTML = chatData.prompt
    document.getElementById("response-text").innerHTML = chatData.response.replace(/\n/g, '<br>')
    const formattedTimestamp = formatDate(chatData.timestamp);
    document.querySelector('.chat-info').innerHTML = `<span class="timestp-span">${formattedTimestamp}</span> 시각의 채팅 기록입니다.`;
    
  } else {
    document.getElementById("chat-detail").innerHTML = "<p>데이터가 없습니다.</p>";
  }
}

// 목록으로 돌아가기
const backButton = document.querySelector(".back-icon");
if (backButton){
  backButton.addEventListener("click", function () {
    window.history.back();
  })
}