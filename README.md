# 냉장고 구조대 (Fridge Rescuer) 🍽

- 냉장고에 있는 재료들을 구조하기 위한 요리를 구상해 내고, 레시피를 검색할 수 있는 서비스입니다.

## 1. 목표와 기능

### 1.1 목표

- API와 JavaScript를 학습하고 활용한 프로젝트 완성
- 냉장고의 재료들이 상하기 전 처리해야하는 자취생과 다수를 위한 서비스 개발

### 1.2 기능

- ChatGPT API를 이용한 요리 목록, 레시피 출력
- Kakao 이미지검색 API를 이용한 음식 사진 출력

## 2. 개발 환경 및 배포 URL

### 2.1 개발 환경

- Front-end
  - HTML
  - JavaScript
  - CSS
- API
  - ChatGPT API
  - Kakao 이미지검색 API
- 서비스 배포 환경
  - GitHub Page

### 2.2 배포 URL

-https://2zero0.github.io/BackendOrmi_project1/project_1/

## 3. 프로젝트 구조와 개발 일정

### 3.1 프로젝트 구조

```bash
└─project_1
    │  index.html
    │  result.html
    │  search.html
    │
    ├─css
    │      style.css
    │
    ├─img
    │      cancel.png
    │      carrot.png
    │      chef.png
    │      cooking.gif
    │      fridge.png
    │      hotpot.png
    │      kitchen_01.png
    │      kitchen_02.png
    │      logo.png
    │      pot.png
    │      recipebook.png
    │      search.png
    │
    └─js
            data.js
            index.js
            lineHighlight.js
            loading.js
            modal.js
            openApi.js
            result.js
            search.js
```

### 3.1 개발 일정(WBS)

- 5/30: 프로젝트 아이디어 구상, 주제 확정
- 5/31 ~ 6/6: UI & 기능 구현
- 6/7 ~ 6/11: 코드 모듈화 및 네이밍 규칙 적용 및 코드 수정
- 6/12: 코드 리뷰와 피드백 반영 및 코드 수정
- 6/13: 프로젝트 마무리

## 4. 역할 분담

- 모든 역할과 작업은 개인이 수행함

## 5. UI / BM

- index.html <br>
  <img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/4c6b4b01-c545-49df-8a30-ee9f2a7860cc" alt="index" width="80%">
- search.html<br>
  <img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/0be8a85e-d733-4270-aaa1-0ca61831bbf7" alt="search" width="80%">
- result.html<br>
  <img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/5cab789a-0b0d-445d-9598-19cd015e623c" alt="search" width="80%">

## 6. 메인 기능

- 사용자가 냉장고 속 재료를 입력하면 재료를 활용해 만들 수 있는 요리 목록 출력
  (ChatGPT API 이용)<br>
  <img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/13401b2e-2909-4c93-a41c-4a1a8e6d3f76" width="80%">
- 사용자가 만들고자하는 요리 이름을 검색하면 요리 사진과 레시피 출력
  (Kakao 이미지 검색 API, ChatGPT API 이용)<br>
  <img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/bdad59f3-4f08-48ae-bdca-a11dd96b9f00" width="80%">

## 7. 개발하며 느낀점

- 우선 확실히 프로젝트를 해보아야 기술이나 언어에 대한 이해도/숙련도가 높아지는 것 같다. 이론으로 배웠을 때 잘 이해가 가지 않아 결국 넘어갔던 개념들을 프로젝트를 하면서 마주하게 되었을 때 비로소 이해하고 사용을 할 수 있었다. Java와 Python과는 달리 나에게 있어 다른 결로 느껴지는 JavaScript라는 언어는 예전부터 하나의 산처럼 오르기에 막막한 느낌이 있었다. 하지만 프로젝트를 진행하면서 JavaScript라는 산을 1/3만큼은 오른 것 같아 마음이 한결 가볍다.
- 이번 프로젝트를 하면서 가장 크게 느낀 점 중에 하나가 계속해서 개발하기에 더욱 좋은 환경이 되고있다는 점이다. ChatGPT 덕분에 프로젝트 중 오류나 로직이 막혔을 때의 그 막막함을 해소시킬 수 있어서 정말 좋았다. 이전에 프로젝트를 했을 때 사실 항상 한번씩은 좌절을 했던 적이 있었는데 이번 프로젝트는 개인 프로젝트이지만 ChatGPT를 동료라고 생각하니 든든하기도하고 좌절의 순간이 오려고할 때 마다 힘이 많이 되었고 큰 도움을 받았다.
- 이번 프로젝트에서 기능 구현보다 코드 모듈화와 정리에 있어 더욱 시간이 오래 걸리고 힘들었던 점을 보아 초기 단계부터 네이밍 규칙이나 코드 구조를 신경써서 짜야할 것 같다고 느꼈다. 또한 하나의 기능도 세부적으로 나눠 깃에 commit을 해야 나중에 수정-관리하기도, 정리하거나 돌아보기도 편하다고 느꼈다.
- readme.md파일을 필히 신경 써 작성할 필요도 느꼈다. 이전에 진행했던 프로젝트들은 깃허브에서 readme.md파일도 작성 안하고 관리를 소홀히 했던 점을 반성했다. 왜냐하면 그 프로젝트를 이제와서 정리 해 놓으려 돌아보니 코드를 뜯어 봐야하고 시간을 또 할애해서 프로젝트 내용을 상기시켜야하니 정말 비효율적이었다. 이 점을 앞으로는 꼭 유의하여 프로젝트마다 정리를 잘 해놓고 언제 다시 들여다보아도 와닿도록 관리를 해야겠다고 깨달았다.
