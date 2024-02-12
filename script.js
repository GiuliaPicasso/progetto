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

function openNav(navId) {
    document.getElementById(navId).style.width = "100%";
}

function closeNav(navId) {
    document.getElementById(navId).style.width = "0%";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}