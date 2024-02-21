location.reload()


//Elementi che appaiono con hoveer

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


//Caricare pagina con opacità


window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 500)
}


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


//Aprire una pagina da sinistra

function openNav(navId) {
    document.getElementById(navId).style.width = "100%";
}

function closeNav(navId) {
    document.getElementById(navId).style.width = "0%";
}


//Tornare alla pagina indietro

function goBack() {
    window.history.back()
}




//Bottone che torna in alto
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

//Bottone che torna in alto
