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
