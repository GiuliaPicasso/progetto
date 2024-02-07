const items = document.querySelectorAll('.col-3, .index-kami, .index-yokai, .index-shizenrei')

items.forEach((el) => {
  const image = el.querySelector('img')

  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })

   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })

  el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.pageX, y: e.pageY })
  })
})


window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})
