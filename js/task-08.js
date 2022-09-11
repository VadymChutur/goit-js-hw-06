const formRef = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target;

  if (email.value === '' || password.value === '') {
    alert('Fill in all fields');
  } else {
    const autorization = {
      email: email.value,
      password: password.value,
    };

    console.log(autorization);
    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.target.reset();
  }
}

formRef.addEventListener('submit', handleSubmit);
