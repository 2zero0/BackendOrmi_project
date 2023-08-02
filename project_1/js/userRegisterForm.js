// 회원가입, 로그인 폼 생성과 전환
document.addEventListener('DOMContentLoaded', function() {
  var panelOne = document.querySelector('.form-panel.one').offsetHeight;
  var panelTwo = document.querySelector('.form-panel.two').scrollHeight;

  var formPanelTwo = document.querySelector('.form-panel.two:not(.active)');
  if (formPanelTwo) {
    formPanelTwo.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector('.form-toggle').classList.add('visible');
      document.querySelector('.form-panel.one').classList.add('hidden');
      document.querySelector('.form-panel.two').classList.add('active');
      document.querySelector('.form').style.height = panelTwo + 'px';
    });
  }

  var formToggle = document.querySelector('.form-toggle');
  if (formToggle) {
    formToggle.addEventListener('click', function(e) {
      e.preventDefault();

      this.classList.remove('visible');
      document.querySelector('.form-panel.one').classList.remove('hidden');
      document.querySelector('.form-panel.two').classList.remove('active');
      document.querySelector('.form').style.height = panelOne + 'px';
    });
  }
});