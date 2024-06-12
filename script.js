const passwordBox = document.getElementById('password');
const length = 10;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = upperCase.toLowerCase();

const number = '0123456789';
const symbol = '!@#$%^&*()_+=?/~[]{}<>|';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  
  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
  
}

document.querySelector('.js-btn').addEventListener('click', ()=>{
  createPassword();
});

document.addEventListener('keypress', (event)=>{
  if(event.key === 'g' || event.key === 'G'){
    createPassword();
  }
});

function copyPassword(){
  passwordBox.select();
  document.execCommand('copy');
}

document.querySelector('.js-copy-btn').addEventListener('click', ()=>{
  copyPassword();
});