
const writeEvent = (text) => {
  // <ul> elementi
  const parent = document.querySelector('#events');

  // <li> elementi
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector('#chat');
  const text = input.value;
  input.value = '';

  sock.emit('message', text);
};

const addButtonListeners = () => {
  ['rock', 'paper', 'scissors'].forEach((id) => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      sock.emit('turn', id);
    });
  });
};

writeEvent('Welcome to RPS');

const sock = io();
sock.on('message', writeEvent);

document
  .querySelector('#chat-form')
  .addEventListener('submit', onFormSubmitted);

addButtonListeners();
