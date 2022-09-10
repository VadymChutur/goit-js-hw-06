const nameFieldRef = document.querySelector('#validation-input');

function addClassValid(add, remove, element) {
  element.classList.add(add);
  element.classList.remove(remove);
}

function validName(event) {
  const { dataset, value } = event.target;
  const validLength = Number(dataset.length);

  if (value.length === validLength) {
    addClassValid('valid', 'invalid', event.target);
  } else {
    addClassValid('invalid', 'valid', event.target);
  }
}

nameFieldRef.addEventListener('blur', validName);
