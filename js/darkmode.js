document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('darkToggle')
  const body = document.body
  const header = document.querySelector('header')
  const nav = document.querySelector('nav')

  // 페이지 로드 시 저장된 모드 적용
  const savedMode = localStorage.getItem('mode')
  if (savedMode === 'dark') {
    body.classList.add('dark-mode')
    if (header) header.classList.add('dark-mode')
    if (nav) nav.classList.add('dark-mode')
    if (toggleButton) toggleButton.innerText = '라이트모드'
  }

  // 버튼 클릭 시 다크모드 토글
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode')

      if (header) header.classList.toggle('dark-mode')
      if (nav) nav.classList.toggle('dark-mode')

      toggleButton.innerText = isDark ? '라이트모드' : '다크모드'

      // 로컬스토리지에 모드 저장
      localStorage.setItem('mode', isDark ? 'dark' : 'light')
    })
  }
})
