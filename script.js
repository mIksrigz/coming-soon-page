window.addEventListener('load',  () => {

  // hoover efect on arrow
  const arrow = document.querySelector('.arrow');
  const button = document.querySelector('.button');
  arrow.addEventListener('mouseover', () => {
    button.classList.add('button-hover')
  })
  arrow.addEventListener('mouseout', () => {
    button.classList.remove('button-hover');
  })

  const input = document.querySelector('#email');
  const notValidMessage = document.querySelector('.not-valid-message');
  const errorIcon = document.querySelector('.error-icon')

  button.addEventListener('click', e => {
    e.preventDefault();
    let mailToValidate = input.value;
    console.log(input.dataset)
    if(!validateMail(mailToValidate)){
      notValidMessage.dataset.visible = true;
      errorIcon.dataset.visible = true;
      input.dataset.wrong = true;
    } else {
      notValidMessage.dataset.visible = false;
      errorIcon.dataset.visible = false;
      input.dataset.wrong = false;
    }
  });

  arrow.addEventListener('click', e => {
    e.preventDefault();
    let mailToValidate = input.value;
    console.log(input.dataset)
    if(!validateMail(mailToValidate)){
      notValidMessage.dataset.visible = true;
      errorIcon.dataset.visible = true;
      input.dataset.wrong = true;
    } else {
      notValidMessage.dataset.visible = false;
      errorIcon.dataset.visible = false;
      input.dataset.wrong = false;
    }
  });

  input.addEventListener('change', () => {
      notValidMessage.dataset.visible = false;
      errorIcon.dataset.visible = false;
      input.dataset.wrong = false;
  });

  function validateMail(mail) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(mail);
  }

});