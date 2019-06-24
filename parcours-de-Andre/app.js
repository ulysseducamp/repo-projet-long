const toggle1= document.querySelector('.tog-block__ic-tog-1');
const content1= document.querySelector('.tog-block__hidden-1');

toggle1.addEventListener('click', () => {
    content1.classList.toggle('is-visible-1')
});

const toggle2= document.querySelector('.tog-block__ic-tog-2');
const content2= document.querySelector('.tog-block__hidden-2');

toggle2.addEventListener('click', () => {
    content2.classList.toggle('is-visible-2')
});

const toggle3= document.querySelector('.tog-block__ic-tog-3');
const content3= document.querySelector('.tog-block__hidden-3');

toggle3.addEventListener('click', () => {
    content3.classList.toggle('is-visible-3')
});


