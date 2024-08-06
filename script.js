document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const close = document.getElementById('close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let images = Array.from(document.querySelectorAll('.myphotos img'));
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[index].src;
        lightbox.style.display = 'flex';
        document.addEventListener('keydown', handleKeydown);
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.removeEventListener('keydown', handleKeydown);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function handleKeydown(event) {
        if (event.key === 'ArrowLeft') {
            showPrevImage();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        }
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    prev.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
    });
    next.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });


    /*******************************************************/
    /* PHOTOS SECTION TESTIMONY */

    const lightbox2 = document.getElementById('lightbox2');
    const lightboxImg2 = document.getElementById('lightboxImg2');
    const close2 = document.getElementById('close2');
    const prev2 = document.getElementById('prev2');
    const next2 = document.getElementById('next2');
    let images2 = Array.from(document.querySelectorAll('.testimonyphotos img'));
    let currentIndex2 = 0;

    function openLightbox2(index) {
        currentIndex2 = index;
        lightboxImg2.src = images2[index].src;
        lightbox2.style.display = 'flex';
        document.addEventListener('keydown', handleKeydown2);
    }

    function closeLightbox2() {
        lightbox2.style.display = 'none';
        document.removeEventListener('keydown', handleKeydown2);
    }

    function showPrevImage2() {
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
        lightboxImg2.src = images2[currentIndex2].src;
    }

    function showNextImage2() {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        lightboxImg2.src = images2[currentIndex2].src;
    }

    function handleKeydown2(event) {
        if (event.key === 'ArrowLeft') {
            showPrevImage2();
        } else if (event.key === 'ArrowRight') {
            showNextImage2();
        }
    }

    images2.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox2(index));
    });

    close2.addEventListener('click', closeLightbox2);
    lightbox2.addEventListener('click', (e) => {
        if (e.target === lightbox2) {
            closeLightbox2();
        }
    });
    prev2.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage2();
    });
    next2.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage2();
    });
});