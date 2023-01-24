const name = document.querySelector('#name');
name.addEventListener('click', function() {
    document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
    });
});
