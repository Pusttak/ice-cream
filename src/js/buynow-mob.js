(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buynow-mob-open]'),
    closeModalBtn: document.querySelector('[data-buynow-mob-close]'),
    modal: document.querySelector('[data-buynow-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
