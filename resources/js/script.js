const navActive= ()=>{
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active')
        hamburger.classList.toggle('close')
    })
    document.onclick = function (e) {
        if (e.target.id !== 'nav-links' && e.target.id !== 'hamburger') {
            navLinks.classList.remove("nav-active");
            hamburger.classList.remove("close");
        }
    }
}
navActive()

window.addEventListener("scroll", function () {
	const header = document.getElementById("header");
	const windowPosition = window.scrollY > 0;

	header.classList.toggle("scroll-active", windowPosition);
});