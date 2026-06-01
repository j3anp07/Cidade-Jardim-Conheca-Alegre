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

    

    const webhookUrl = 'http://localhost:5679/webhook/53b2408e-9066-4bcd-8a4c-dc4040032741';

    fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors', // Força o navegador a enviar os dados ignorando a trava de segurança de CORS
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosFormulario)
    })
    .then(() => {
      // Com 'no-cors', o navegador não deixa ler o response.ok por segurança,
      // mas o dado chega perfeitamente no n8n. Então consideramos sucesso direto aqui!
      formStatus.style.color = '#2ed573';
      formStatus.textContent = 'Mensagem enviada com sucesso!';
      contatoForm.reset();
    })
    .catch(error => {
      formStatus.style.color = '#ff4757';
      formStatus.textContent = 'Erro de conexão com o servidor.';
      console.error('Erro detalhado:', error);
    });
  });
}