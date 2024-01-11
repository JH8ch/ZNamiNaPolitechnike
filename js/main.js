const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = nav.querySelectorAll('.nav__item')
const headerBtn = document.querySelector('.header__btn')
// console.log(headerBtn);
const navBars = document.querySelector('.burger-btn__bars')
const section = document.querySelectorAll('.section')
console.log(section);

function showHideNav() {
	console.log('showHideNav')
	nav.classList.toggle('nav--active')
	navItemsAnimation()
}

const navItemsAnimation = () => {
	let delayTime = 0
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		// animation-delay: .3s;
		item.style.animationDelay = `.${delayTime}s`
		delayTime++
	})
	navItems.forEach(item => {
		item.addEventListener('click', showHideNav)
	})
}

burgerBtn.addEventListener('click', showHideNav)