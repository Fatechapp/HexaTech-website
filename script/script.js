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