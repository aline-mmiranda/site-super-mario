const form = document.querySelector('.fale-conosco');
const background = document.querySelector('.mascara-form');
const showForm = document.querySelectorAll('.mostrar-form');
const whatsapp = document.querySelector('.whatsapp');

showForm.forEach(click => {
    click.addEventListener('click', () => {
        form.style.left = '50%';
        form.style.transform = 'translateX(-50%)';
        background.style.visibility = 'visible';
    });
});

background.addEventListener('click', () => {
    form.style.left = '-330px';
    form.style.transform = 'translateX(0)';
    background.style.visibility = 'hidden';
});

whatsapp.addEventListener('click', () => {

});

whatsapp.addEventListener('click', function () {
    const number = '5585997794047';
    const message = encodeURIComponent('Olá, gostaria de mais informações!');
    const url = `https://wa.me/${number}?text=${message}`;

    window.open(url, '_blank');
});
