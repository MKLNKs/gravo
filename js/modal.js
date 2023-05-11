const callbackBtn = document.querySelector('.callback-btn'),
    modal = document.querySelector('.hide'),
    escBtn = document.querySelector('.escBtn');

callbackBtn.addEventListener('click', openModal);

function openModal() {
    modal.classList.add('modal');
    modal.classList.remove('hide');
}

escBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('modal');
}

/*Закриваємо по кліку поза межами модального вікна*/
document.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
})

/*Закриваємо кнопкою esc*/
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal')) closeModal();
})