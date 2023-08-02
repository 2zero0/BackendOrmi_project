// DRF 서버와 api 통신
// register
document.querySelector(".register-btn").addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.querySelector("#register_username").value;
  var password = document.querySelector("#register_password").value;
  var nickname = document.querySelector("#nickname").value;
  var cpassword = document.querySelector("#cpassword").value;

  if (password !== cpassword) {
    alert("Passwords do not match.");
    return;
  }

  fetch("http://127.0.0.1:8000/user/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password, nickname: nickname })
  })
  .then(response => {
    if (response.status === 201) {
      alert("회원가입 성공! 이제 로그인 하세요");
    } else {
      alert("Registration failed: " + response.status + " " + response.statusText);
    }
    return response.json();
  })
  .catch(error => {
    alert("Registration failed: " + error.message);
  });
});

// login
document.querySelector(".login-btn").addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.querySelector("#login_username").value;
  var password = document.querySelector("#login_password").value;

  fetch("http://127.0.0.1:8000/user/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => {
    if (response.status === 200) {
      alert("로그인 성공");
    } else {
      alert("로그인 실패: " + response.status + " " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // console.log('Received data:', data);
    if (data.access) {
      // JWT 토큰을 local storage에 저장
      localStorage.setItem("authToken", data.access);
      location.href = "index.html";
    }
  })
  .catch(error => {
    alert("로그인 실패: " + error.message);
  });
});
