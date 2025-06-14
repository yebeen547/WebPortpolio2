function updateClock() {
  const clock = document.getElementById('clock')
  const now = new Date()
  const timeString = now.toLocaleTimeString()
  clock.textContent = '현재 시간 : ' + timeString
}

setInterval(updateClock, 1000)
updateClock()
