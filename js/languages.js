document.getElementById('flag-button').addEventListener('click', function() {
    let flagIcon = document.getElementById('flag-icon');
    let currentPage = window.location.pathname;

    if (currentPage.endsWith('index.html')) {
        flagIcon.src = '/data/great-britain-flag.png';
        flagIcon.alt = 'English Flag';

        window.location.href = 'english.html';
    } else if (currentPage.endsWith('english.html')) {
        flagIcon.src = '/data/russia-flag.png';
        flagIcon.alt = 'Russian Flag';

        window.location.href = 'index.html';
    }
});
