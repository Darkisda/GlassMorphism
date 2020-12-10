const card = document.querySelector('.card')

card.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 7
  let yAxis = (window.innerHeight / 2 - e.pageY) / 7

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

card.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  
})

card.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
})