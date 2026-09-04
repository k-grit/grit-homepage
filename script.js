const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('#navMenu');
if (btn && nav) {
	btn.addEventListener('click', () => nav.classList.toggle('open'));
	nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList
		.remove('open')))
}
