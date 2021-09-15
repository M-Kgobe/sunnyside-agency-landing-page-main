const navActive= ()=>{
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active')
        hamburger.classList.toggle('close')
    })
}
navActive()

window.addEventListener("scroll", function () {
	const header = document.getElementById("header");
	const windowPosition = window.scrollY > 0;

	header.classList.toggle("scroll-active", windowPosition);
});