interface MenuRefs {
  openMenuBtn: HTMLElement | null;
  closeMenuBtn: HTMLElement | null;
  menu: HTMLElement | null;
}

(() => {
  const refs: MenuRefs = {
    openMenuBtn: document.querySelector<HTMLElement>('[data-menu-open]'),
    closeMenuBtn: document.querySelector<HTMLElement>('[data-menu-close]'),
    menu: document.querySelector<HTMLElement>('[data-menu]'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) {
    console.warn('Menu elements not found');
    return;
  }

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu(): void {
    if (refs.menu) {
      refs.menu.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }
})();

