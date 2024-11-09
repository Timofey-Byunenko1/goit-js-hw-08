const images = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
  ];
  
  function createGalleryMarkup(images) {
    return images
      .map(({ preview, original, description }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${original}">
              <img
                class="gallery-image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
        `;
      })
      .join('');
  }
  
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = createGalleryMarkup(images);
  
  
  function onGalleryItemClick(event) {
    event.preventDefault();
  
    const isImage = event.target.classList.contains('gallery-image');
    if (!isImage) return;
  
    const originalImageSrc = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${originalImageSrc}" width="800" height="600">
    `);
  
    instance.show();
  }
  

  galleryContainer.addEventListener('click', onGalleryItemClick);