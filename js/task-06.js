const nameFieldRef = document.querySelector('#validation-input');

function addClassValid(add, element) {
  element.classList.add(add);
}

function removeClassValid(remove, element) {
  element.classList.remove(remove);
}

function validName(event) {
  const { dataset, value } = event.target;
  const validLength = Number(dataset.length);

  if (value.length === validLength) {
    addClassValid('valid', event.target);
    removeClassValid('invalid', event.target);
  } else {
    addClassValid('invalid', event.target);
    removeClassValid('valid', event.target);
  }
}

nameFieldRef.addEventListener('blur', validName);
