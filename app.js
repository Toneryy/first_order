window.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelectorAll('.video');

    video.forEach(function () {
        video.addEventListener('click', function () {
            if (video.classList.contains('ready')) {
                return;
            }
    
            video.classList.add('ready');
            const src = video.dataset.src;
            video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/BImuzR9kkRk?si=f4tQtJyDNB0amAQj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
        });
    })
});
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var targetElement = document.getElementById('anchor-description');
    var targetElementPosition = targetElement.getBoundingClientRect();

    if (targetElementPosition.top < window.innerHeight) {
        // Change to more pleasent color
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        header.style.backgroundColor = 'rgba(28, 27, 33, 0.3)';
    }
});
function scrollToSection(selector) {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}
