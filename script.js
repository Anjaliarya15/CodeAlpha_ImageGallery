let images = document.querySelectorAll('.gallery img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightboxImg');
let index = 0;

/* Open Lightbox */
images.forEach((img, i) => {
  img.addEventListener('click', () => {
    index = i;
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

/* Close Lightbox */
function closeLightbox() {
  lightbox.style.display = 'none';
}

/* Next / Previous Image */
function changeImage(step) {
  index = (index + step + images.length) % images.length;
  lightboxImg.src = images[index].src;
}

/* Filter Images */
function filterImages(category) {
  document.querySelectorAll('.filters button')
    .forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  images.forEach(img => {
    img.style.display =
      category === 'all' || img.dataset.cat === category
        ? 'block'
        : 'none';
  });
}
