document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem')
    };
  
    fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
      alert('Erro ao enviar mensagem');
    });
  });
  