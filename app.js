let nav_toggle = document.querySelector('.nav_toggle')
let nav_round = document.querySelector('#nav_round')

nav_toggle.addEventListener('click', () => {
  nav_round.classList.toggle('activate')
})
