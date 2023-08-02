// 유저 정보 출력
export function displayLoggedInUser(authToken) {
  if (!authToken) {
    alert("사용자 정보가 없습니다. 로그인을 먼저 하세요.");
    location.href="user_register.html"
    return;
  }

  fetch("http://127.0.0.1:8000/user/userinfo/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("사용자 정보를 가져올 수 없습니다.");
      }
    })
    .then((data) => {
      const userDisplayText = `${data.nickname}(${data.username})`;
      document.querySelector('#userDisplay').textContent = userDisplayText;
    })
    .catch((error) => {
      alert(error.message);
    });
}