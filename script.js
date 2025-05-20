// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');
  const botao = form.querySelector('button');

  function validarFormulario() {
    if (nome.value.trim() && email.value.trim() && mensagem.value.trim()) {
      botao.disabled = false;
      botao.style.cursor = 'pointer';
      botao.style.opacity = '1';
    } else {
      botao.disabled = true;
      botao.style.cursor = 'not-allowed';
      botao.style.opacity = '0.5';
    }
  }

  nome.addEventListener('input', validarFormulario);
  email.addEventListener('input', validarFormulario);
  mensagem.addEventListener('input', validarFormulario);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
    validarFormulario();
  });

  validarFormulario();
});
