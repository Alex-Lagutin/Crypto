const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

modal.getElementsByClassName.transitionDuration = '0.36s'

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});
overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')){
    overlay.classList.remove('overlay_open'); 
    modal.classList.remove('modal_open');
}
  });
  const form = document.querySelector('form');

  form. addEventListener('submit', (event) => {

    const data = {
      name: form.name. value,
      surmane: form.surname.value,
      tel: form.tel.value,
    };

    fetch('https://api-form-order.herokuapp.com/api/order',{
      method: 'post',
      body: JSON.stringify(data)
    })
  })