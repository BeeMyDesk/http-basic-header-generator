document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-generator');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const usernameValue = username.value;
    const passwordValue = password.value;

    const credentials = `${usernameValue}:${passwordValue}`;
    const base64Credentials = btoa(credentials);

    const header = document.getElementById('header');
    header.value = `Basic ${base64Credentials}`;
  });
});
