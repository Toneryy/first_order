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

/**
 * Слушатель на скролл для активации background для header
 */
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

/**
 * Плавный переход до нужной секции через header
 */
function scrollToSection(selector) {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Форма для отправки телефона на почту
 */
function submitPhone(event) {
    event.preventDefault();
    let phoneNumber = document.getElementById('phoneNumber').value;
    
    // Придумать куда будет идти запрос (разобраться с API почты)
    fetch('http://localhost:8080/api/mail', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber: phoneNumber }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(document.getElementById('phoneNumber').value = '')
    .then(document.getElementById('agrcheckbox').checked = false)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}