let data = [
  {
    role: "system",
    content:
      "assistant는 요리 전문가이다. 사용자가 재료를 입력하면 그것들로 만들 수 있는 요리를 목록으로 3개 이상 5개 이하로 알려준다.",
  },
  {
    role: "user",
    content: "감자",
  },
  {
    role: "assistant",
    content:
      "감자로 만들 수 있는 다양한 요리가 있습니다. 몇 가지를 소개해드리겠습니다.\n1. 감자튀김: 감자를 슬라이스해서 노릇하게 튀겨서 소금이나 양념을 뿌려서 드시면 맛있습니다. 간단하지만 깊은 맛을 느낄 수 있는 대표적인 감자 요리입니다.\n2. 구운 감자: 감자를 껍질까지 깨끗이 씻고, 껍질은 깨끗한 상태로 유지합니다. 전자레인지나 오븐에서 굽습니다. 구운 감자는 부드럽고 달콤해서 좋습니다.\n3. 감자조림: 감자를 끓인 후 고춧가루, 간장, 설탕 등으로 간을 맞추면 매콤하고 달콤한 감자조림이 나옵니다.\n4. 감자전: 감자를 다진 후 부침가루와 계란 등으로 만든 반죽에 넣어서 굽습니다. 간단하게 만들어도 맛이 좋습니다.\n5. 감자구이: 감자를 토막내서 오븐이나 프라이팬에서 구워줍니다. 소금이나 고추장을 뿌려서 드시면 맛있습니다.\n알려드린 방법들 외에도 많은 방법으로 감자를 요리할 수 있습니다. 직접 조리해 보시면 더 맛있는 요리를 만들어 낼 수 있을 것입니다.",
  },
];

const form = document.getElementById("myForm");
const textarea = document.getElementById("myTextarea");

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 방지

  /* 로딩중 */
  //
  LoadingWithMask(); // 로딩 중 표시 함수 호출

  setTimeout(function () {
    closeLoadingWithMask(); // 1분 후에 로딩 중 표시 닫기 함수 호출
  }, 60000);
  //

  console.log(textarea.value); // textarea의 값 콘솔에 출력

  // 입력한 값을 로컬 스토리지에 저장
  localStorage.setItem("inputValue", textarea.value);

  // chatGPT
  userInputData = textarea.value;
  textarea.value = "";

  data.push({
    role: "user",
    content: userInputData,
  });

  chatGptAPI();
});

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
      //console.log("res: ", res); // 출력test
      //console.log("출력값: ", res.choices[0].message.content); // 출력test

      // document.querySelector("#contents").innerText =
      //   res.choices[0].message.content;

      localStorage.setItem("resultValue", res.choices[0].message.content);

      // 페이지 이동
      window.location = "result.html";
    });

  console.log("hello young");
}

function LoadingWithMask() {
  const containerDisable = document.getElementsByClassName("container");
  for (let i = 0; i < containerDisable.length; i++) {
    containerDisable[i].style.display = "none";
  }

  var mask = document.createElement("div");
  mask.id = "mask";
  mask.style.position = "absolute";
  mask.style.zIndex = "9000";
  mask.style.backgroundColor = "#000000";
  mask.style.display = "none";
  mask.style.left = "0";
  mask.style.top = "0";

  var loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";
  var img = document.createElement("img");
  img.src = "img/cooking.gif";
  img.style.position = "relative";
  img.style.display = "block";
  img.style.margin = "100px auto 20px";
  img.style.width = "500px";
  img.style.height = "500px";
  loadingImg.appendChild(img);

  var message = document.createElement("p");
  message.textContent = "요리 구상중입니다 1분만 기다려주세요!";
  message.style.textAlign = "center";
  message.style.fontFamily = "NeoDunggeunmo";
  message.style.fontSize = "large";
  message.style.border = "5px solid white";
  message.style.borderRadius = "20px";
  message.style.color = "white";
  message.style.backgroundColor = "#2eb7b7";
  message.style.padding = "20px";
  message.style.width = "600px";
  message.style.height = "80px";
  message.style.margin = "auto";
  loadingImg.appendChild(message);

  document.body.appendChild(mask);
  document.body.appendChild(loadingImg);

  var maskHeight = document.documentElement.scrollHeight;
  var maskWidth = document.documentElement.clientWidth;

  mask.style.width = maskWidth + "px";
  mask.style.height = maskHeight + "px";
  mask.style.opacity = "0.1";

  mask.style.display = "block";
  loadingImg.style.display = "block";
}

function closeLoadingWithMask() {
  var mask = document.getElementById("mask");
  var loadingImg = document.getElementById("loadingImg");
  if (mask && loadingImg) {
    mask.style.display = "none";
    loadingImg.style.display = "none";
    mask.parentNode.removeChild(mask);
    loadingImg.parentNode.removeChild(loadingImg);
  }
}
