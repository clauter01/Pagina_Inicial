const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados
mongoose.connect('mongodb://localhost:27017/portaldosartistas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir esquema de contato
const contatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  assunto: String,
  mensagem: String
});
const Contato = mongoose.model('Contato', contatoSchema);

// Rota de envio de contato
app.post('/api/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  const novoContato = new Contato({ nome, email, assunto, mensagem });
  novoContato.save()
    .then(() => res.json({ message: 'Mensagem enviada com sucesso!' }))
    .catch((error) => res.status(500).json({ error: 'Erro ao enviar mensagem' }));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
