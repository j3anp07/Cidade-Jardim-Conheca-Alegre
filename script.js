const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

navLinks.classList.toggle('ativo');

});


const btnEnviar = document.getElementById('btn-enviar');
const contatoForm = document.querySelector('.contato form');
const formStatus = document.getElementById('form-status');

if (btnEnviar && contatoForm) {
  
  btnEnviar.addEventListener('click', function(event) {
    event.preventDefault();

    
    const nomeInput = contatoForm.querySelector('input[type="text"]');
    const emailInput = contatoForm.querySelector('input[type="email"]');
    const mensagemInput = contatoForm.querySelector('textarea');

    
    if (!nomeInput.value || !emailInput.value || !mensagemInput.value) {
      formStatus.style.color = '#ff4757';
      formStatus.textContent = 'Por favor, preencha todos os campos.';
      return;
    }

    formStatus.style.color = '#333';
    formStatus.textContent = 'Enviando mensagem...';

    const dadosFormulario = {
      nome: nomeInput.value,
      email: emailInput.value,
      mensagem: mensagemInput.value
    };

    
    const webhookUrl = 'https://eoo182arl6oqyrr.m.pipedream.net';

    fetch(webhookUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosFormulario)
    })
    .then(response => {
      if (response.ok) {
        formStatus.style.color = '#2ed573';
        formStatus.textContent = 'Mensagem enviada com sucesso!';
        contatoForm.reset();
      } else {
        formStatus.style.color = '#ff4757';
        formStatus.textContent = 'Erro no servidor do Webhook.';
      }
    })
    .catch(error => {
      formStatus.style.color = '#ff4757';
      formStatus.textContent = 'Erro de conexão com o servidor.';
      console.error('Erro detalhado:', error);
    });
  });
}