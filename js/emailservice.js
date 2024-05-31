/**
 * For email
 */
function sendMail() {
    event.preventDefault(); 

    let now = new Date().getTime();
    const then = localStorage.getItem("previous-full-request-time");
    var phone = document.getElementById('requestphone').value;
    // milliseconds
    const timeout = 5 * 60_000;
    if (then == null || Number(then) + timeout < now) {
        if (validatePhone(phone) == true) {
            localStorage.setItem("previous-full-request-time", now)
            var params =  {
                name: document.getElementById('requestname').value,
                phone: phone,
                location: document.getElementById('requestlocation').value,
                date: document.getElementById('requestdate').value
            }
            emailjs.send("service_ibt0yqx", "template_zvuwwth", params)
            .then(document.getElementById('requestname').value = '')
            .then(document.getElementById('requestphone').value = '')
            .then(document.getElementById('requestlocation').value = '')
            .then(document.getElementById('requestdate').value = '')
            .then(response => response.json())
            .then(alert("Письмо успешно отправлено!"))
            .catch(error => {
                console.error('Ошибка:', error);
            });;
            closePopup();
        } else {
            alert("Некорректный номер телефона")
        }
    } else {
        alert("Слишком много запросов. Подождите...")
    }
}

function sendPhone() {
    event.preventDefault(); 

    let now = new Date().getTime();
    const then = localStorage.getItem("previous-request-time");
    var phone = document.getElementById('phoneNumber').value;
    // milliseconds
    const timeout = 5 * 60_000;
    if (then == null || Number(then) + timeout < now) {
        if (validatePhone(phone) == true) {
            localStorage.setItem("previous-request-time", now)
            var params =  {
                phone: phone,
            }
            emailjs.send("service_ibt0yqx", "template_1vujh09", params)
            .then(document.getElementById('phoneNumber').value = '')
            .then(response => response.json())
            .catch(error => {
                console.error('Ошибка:', error);
            });;
            closePopup();
        } 
    } 
}
