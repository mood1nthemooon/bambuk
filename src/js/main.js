// Import all of Bootstrap's CSS
import '../scss/style.scss';
import 'bootstrap/js/dist/collapse';

const fadeIn = [
    [
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1 }
    ],
    {
        duration: 100,
        iterations: 1,
        fill: 'forwards'
    } 
];

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            for (let index = 0; index < entry.target.children.length; index++) {
                const child = entry.target.children[index];
                const animation = child.animate(...fadeIn);    
                animation.pause();
                
                setTimeout(() => {
                    animation.play();
                }, 100 * index);

                animation.finished.then(() => {
                    animation.persist();
                });
            }
        }
    }
}, { rootMargin: "-50px" });

const photos = document.querySelectorAll('[photos]');

photos.forEach((photo) => {
    observer.observe(photo);
});