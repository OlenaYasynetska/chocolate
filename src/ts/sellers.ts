(() => {
  const sellersImages = document.querySelectorAll<HTMLImageElement>('.sellers-img');

  if (sellersImages.length === 0) {
    console.warn('Sellers images not found');
    return;
  }

  sellersImages.forEach((img) => {
    img.addEventListener('click', () => {
      const isExpanded = img.classList.contains('sellers-img-expanded');
      
      // Закрываем все другие увеличенные изображения
      sellersImages.forEach((otherImg) => {
        if (otherImg !== img) {
          otherImg.classList.remove('sellers-img-expanded');
        }
      });

      // Переключаем текущее изображение
      if (isExpanded) {
        img.classList.remove('sellers-img-expanded');
      } else {
        img.classList.add('sellers-img-expanded');
      }
    });

    // Добавляем курсор pointer для индикации кликабельности
    img.style.cursor = 'pointer';
  });
})();

