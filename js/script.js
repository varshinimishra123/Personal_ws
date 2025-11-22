// jQuery + JS interactions

$(document).ready(function () {
    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Mobile navigation toggle
    $('.nav-toggle').on('click', function () {
        $('nav ul').toggleClass('show');
    });

    // Dark / light theme toggle
    $('#themeToggle').on('click', function () {
        $('body').toggleClass('dark');
        // Store preference in localStorage
        if ($('body').hasClass('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark');
    }
});
