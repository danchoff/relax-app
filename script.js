const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 8500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5
const audio = new Audio('song/lofi-song.mp3')

function playSong() {
  audio.play()
}  

function pauseSong() {
  audio.pause()
}

breatheAnimation()

function breatheAnimation () {
  text.innerHTML = 'Inhale...'
  container.className = 'container grow'

  setTimeout(() => {
      text.innerHTML = 'Hold'

      setTimeout(() => {
         text.innerHTML = 'Exhale....'
         container.className = 'container shrink'
      }, holdTime)
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime)

window.addEventListener('keydown', playSong);