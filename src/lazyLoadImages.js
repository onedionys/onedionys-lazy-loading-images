function lazyLoadImages(selector) {
    const images = document.querySelectorAll(selector);
    
    const options = {
        threshold: 0.5 // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        observer.observe(img);
    });
}

module.exports = lazyLoadImages;
