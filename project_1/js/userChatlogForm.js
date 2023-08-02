import { formatDate } from "./formatDate.js";

// 로컬 스토리지에서 채팅 내역 불러오기
const chatLogs = JSON.parse(localStorage.getItem("chatLogs"));
// 채팅 내역 목록 함수 호출
if (document.getElementById("chatlog-container")) {
  loadChatLogList();
}

// 채팅 내역 상세 보기 함수 호출
if (document.getElementById("chat-detail")) {
  loadChatLogDetail();
}

// 채팅 내역 목록 조회 함수
function loadChatLogList() {
  const chatlogContainer = document.getElementById("chatlog-container");

  // 마지막으로 처리한 로그의 날짜 추적
  let lastDate = "";

  chatLogs.forEach(log => {
    const logDate = formatDateWithoutTime(log.timestamp);

    // 새로운 로그의 날짜가 변경되었는지 확인 후 구분자 추가
    if (logDate !== lastDate) {
      const dateSeparator = document.createElement("tr");
      const dateHeader = document.createElement("td");
      dateHeader.classList.add("date-divider");
      dateHeader.colSpan = 2;
      dateHeader.innerHTML = `<span>${logDate}</span>`;
      dateSeparator.appendChild(dateHeader);
      chatlogContainer.appendChild(dateSeparator);

      lastDate = logDate;
    }

    const logRow = document.createElement("tr");

    const logQuestion = document.createElement("td");

    logQuestion.innerHTML = `<a href="user_chatlog_detail.html?logId=${log.id}">${log.prompt}</a>`;
    logRow.appendChild(logQuestion);

    const logTimestamp = document.createElement("td");
    const formattedTimestamp = formatDate(log.timestamp);
    logTimestamp.innerHTML = formattedTimestamp;
    logRow.appendChild(logTimestamp);

    chatlogContainer.appendChild(logRow);
  });
}

// 데이터 저장된 마지막 날짜 계산 함수
function formatDateWithoutTime(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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