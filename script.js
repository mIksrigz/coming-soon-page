window.addEventListener('load', () => {

  // hoover efect on arrow
  const arrow = document.querySelector('.arrow');
  const button = document.querySelector('.button');
  arrow.addEventListener('mouseover', () => {
    button.classList.add('button-hover')
  })
  arrow.addEventListener('mouseout', () => {
    button.classList.remove('button-hover');
  })

  // checkingMail
  const email = document.querySelector('#email');
  button.addEventListener('click', e => {
    e.preventDefault();
    console.log(email.value);
  })
});