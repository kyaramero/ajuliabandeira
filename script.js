document
  .getElementById('form-contact')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    // Simular o envio do formulário
    const nome = document.getElementById('name').value

    const status = document.getElementById('mensagem-status')
    status.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida (simulação).`

    // Limpar o formulário
    this.reset()
  })
