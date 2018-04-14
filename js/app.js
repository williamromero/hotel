$(document).ready(function() {
	
	let burgerIcon = document.querySelector('.burger-icon');
	let menuItem = document.querySelector('.mc-menu-block-boxes-item');


	let menuModal = document.querySelector('.mc-modal-block');
	let menutwoModal = document.querySelector('.mc-modal-menu-block');

	let closeModal = document.querySelector('.close-modal');
	let closemenuModal = document.querySelector('.close-menu-modal')


	burgerIcon.addEventListener('click', function() {
		menuModal.classList.add('mc-modal-visible');
	});

	closeModal.addEventListener('click', function(){
		menuModal.classList.remove('mc-modal-visible');
	});




	menuItem.addEventListener('click', function () {
		menutwoModal.classList.add('mc-modal-menu-visible');
	})

	closemenuModal.addEventListener('click', function () {
		menutwoModal.classList.remove('mc-modal-menu-visible');
	})

});