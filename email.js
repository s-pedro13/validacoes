// Função para checar a validade do email
function checarEmail() {
    // Obtém o valor do email do formulário
    const email = document.forms[0].email.value;
    // Verifica se o campo está vazio ou se não contém '@' e '.'
    if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Por favor, informe um e-mail válido");
        return false;
    } else {
        // Exibe o email validado no parágrafo com id 'email'
        document.getElementById('email').innerHTML = email;
    }
 }