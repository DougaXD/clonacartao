document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const data = document.getElementById('data').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const cardnum = document.getElementById('cardnum').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifique se todos os campos estão preenchidos
    if (nome !== '' && sobrenome !== '' && data !== '' && cpf !== '' && cardnum !== '' && senha !== '') {
        // Redireciona para a nova página
        window.location.href = 'seujogador.html';
    } else {
        alert('Tá faltando uns dados no bagulho!!!');
    }
});

