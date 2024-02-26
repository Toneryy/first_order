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
 * Validate phone number for pattern [+* *** *** ** **] and [* *** *** ** **]
 * whether or not there are spaces it does not matter
 */
function validatePhone(number)
{
    if (number.length < 11 || number.length > 16) {
        return false;
    }

    let i = 1;
    if (number[0] != "+") {
        i = 0;
    } else {
        i = 1;
    }

    while (i < number.length)
    {
        // Make sure it is a digit or a " ";
        if (isNaN(number[i])) {
            return false;
        }
        i++;
    }
    return true;
}

/**
 * Форма для отправки телефона на почту
 */
function submitPhone(event) {
    event.preventDefault();

    let now = new Date().getTime();
    const then = localStorage.getItem("previous-request-time");

    // milliseconds
    const timeout = 5 * 60_000;

    if (then == null || Number(then) + timeout < now) {
        let phoneNumber = document.getElementById('phoneNumber').value;
        if (validatePhone(phoneNumber) === true) {
            localStorage.setItem("previous-request-time", now)
            fetch('http://localhost:8000/api/phone', {
                method: 'POST',
                body: JSON.stringify({ phoneNumber: phoneNumber }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(document.getElementById('phoneNumber').value = '')
            .then(document.getElementById('agrcheckbox').checked = false)
            .then(response => response.json())
            .then(alert("Письмо успешно отправлено!"))
            .catch(error => {
                console.error('Ошибка:', error);
            });;
        } else {
            alert("Некорректный номер телефона")
        }
    } else {
        alert("Слишком много запросов. Подождите...")
    }
}

function submitForm() {
    event.preventDefault(); 

    let now = new Date().getTime();
    const then = localStorage.getItem("previous-full-request-time");

    // milliseconds
    const timeout = 5 * 60_000;
    if (then == null || Number(then) + timeout < now) {
        var name = document.getElementById('requestname').value;
        var phone = document.getElementById('requestphone').value;
        var location = document.getElementById('requestlocation').value;
        var date = document.getElementById('requestdate').value;
        if (validatePhone(phone) == true) {
            localStorage.setItem("previous-full-request-time", now)
            fetch('http://localhost:8000/api/request', {
                method: 'POST',
                body: JSON.stringify({name: name, phoneNumber: phone, location: location, date: date}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(document.getElementById('requestname').value = '')
            .then(document.getElementById('requestphone').value = '')
            .then(document.getElementById('requestlocation').value = '')
            .then(document.getElementById('requestdate').value = '')
            .then(response => response.json())
            .then(alert("Письмо успешно отправлено!"))
            .catch(error => {
                console.error('Ошибка:', error);
            });;
        } else {
            alert("Некорректный номер телефона")
        }
    } else {
        alert("Слишком много запросов. Подождите...")
    }
}
