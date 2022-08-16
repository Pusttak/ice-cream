(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-locations-open__chicago]'),
      closeModalBtn: document.querySelector('[data-locations-close__chicago]'),
      modal: document.querySelector('[data-locations__chicago]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-locations-open__los-angeles]'),
      closeModalBtn: document.querySelector('[data-locations-close__los-angeles]'),
      modal: document.querySelector('[data-locations__los-angeles]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-locations-open__new-york]'),
      closeModalBtn: document.querySelector('[data-locations-close__new-york]'),
      modal: document.querySelector('[data-locations_new-york]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  