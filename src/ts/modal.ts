interface ModalRefs {
  openModalBtn: HTMLElement | null;
  closeModalBtn: HTMLElement | null;
  modal: HTMLElement | null;
}

(() => {
  const refs: ModalRefs = {
    openModalBtn: document.querySelector<HTMLElement>('[data-modal-open]'),
    closeModalBtn: document.querySelector<HTMLElement>('[data-modal-close]'),
    modal: document.querySelector<HTMLElement>('[data-modal]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.warn('Modal elements not found');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(): void {
    if (refs.modal) {
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();

