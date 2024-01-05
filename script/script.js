// TOOGLE SIDEBAR
const navRight = document.querySelector('.navigation-content-right')
const hamburger = document.querySelector('.hamburger-menu')

hamburger.onclick = () => {
    navRight.classList.toggle('active')
    hamburger.classList.toggle('active')
}
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navRight.contains(e.target)) {
        navRight.classList.remove('active')
        hamburger.classList.remove('active')
    }
})

//LINK SCROLLING
const aboutUsLink = document.getElementById('about-us-link')
const aboutUsContent = document.getElementById('about-us')

const servicesLink = document.getElementById('services-link')
const servicesContent = document.getElementById('services')

const partnersLink = document.getElementById('partners-link')
const partnersContent = document.getElementById('partners')

const newsLink = document.getElementById('latest-news-link')
const newsContent = document.getElementById('latest-news')

const contactLink = document.getElementById('contact-us-link')
const contactContent = document.getElementById('contact-us')


aboutUsLink.addEventListener('click', function (e) {
    e.preventDefault()
    aboutUsContent.scrollIntoView({behavior:"smooth"})
})
servicesLink.addEventListener('click', function (e) {
    e.preventDefault()
    servicesContent.scrollIntoView({behavior:"smooth"})
})
partnersLink.addEventListener('click', function (e) {
    e.preventDefault()
    partnersContent.scrollIntoView({behavior:"smooth"})
})
newsLink.addEventListener('click', function (e) {
    e.preventDefault()
    newsContent.scrollIntoView({behavior:"smooth"})
})
contactLink.addEventListener('click', function (e) {
    e.preventDefault()
    contactContent.scrollIntoView({behavior:"smooth"})
})
