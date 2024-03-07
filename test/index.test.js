const assert = require('assert');
const lazyLoadImages = require('../src/lazyLoadImages');

describe('Lazy Loading Images', function() {
    it('should lazy load images', function() {
        // Create a sample DOM with images
        document.body.innerHTML = `
            <img src="#" data-src="image1.jpg" class="lazy">
            <img src="#" data-src="image2.jpg" class="lazy">
            <img src="#" data-src="image3.jpg" class="lazy">
        `;

        // Execute lazy loading
        lazyLoadImages('.lazy');

        // Check if images have been loaded
        const lazyImages = document.querySelectorAll('.lazy');
        lazyImages.forEach(img => {
            assert.strictEqual(img.src, img.dataset.src);
        });
    });
});
