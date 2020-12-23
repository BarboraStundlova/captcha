'use strict';

let captcha;
let alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
let status = document.querySelector('#status');

const generateCaptcha = () => {
  let first = Math.floor(Math.random() * 10);
  let second = alphabet[Math.floor(Math.random() * alphabet.length)];
  let third = Math.floor(Math.random() * 10);
  let fourth = alphabet[Math.floor(Math.random() * alphabet.length)];
  let fifth = alphabet[Math.floor(Math.random() * alphabet.length)];
  let sixth = Math.floor(Math.random() * 10);
  captcha =
    first.toString() +
    second.toString() +
    third.toString() +
    fourth.toString() +
    fifth.toString() +
    sixth.toString();
  document.querySelector('#generated-captcha').value = captcha;
  status.innerText = 'Captcha Generator';
};

const checkCaptcha = () => {
  let input = document.querySelector('#entered-captcha').value;
  if (input === captcha) {
    status.innerText = 'Matched!';
  } else {
    status.innerText = 'Not matching!';
  }
};
