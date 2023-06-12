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

-

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

- FE, 디자인: 이 영

## 5. UI / BM

<!-- - index.html
<img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/4c6b4b01-c545-49df-8a30-ee9f2a7860cc" alt="index" width="70%">
- search.html
<img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/0be8a85e-d733-4270-aaa1-0ca61831bbf7" alt="search" width="70%">
- result.html
<img src="https://github.com/2zero0/BackendOrmi_project1/assets/43246395/5cab789a-0b0d-445d-9598-19cd015e623c" alt="search" width="70%"> -->

## 6. 메인 기능

- 사용자가 냉장고 속 재료를 입력하면 재료를 활용해 만들 수 있는 요리 목록 출력
  (ChatGPT API 이용)
- 사용자가 만들고자하는 요리 이름을 검색하면 요리 사진과 레시피 출력
  (Kakao 이미지 검색 API, ChatGPT API 이용)

## 7. 개발하며 느낀점

- 작성 예정
