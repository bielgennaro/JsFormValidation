//getElementsById = Essa linha procura o elemento HTML com o atributo id igual a username e o armazena na variável
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
//querySelector =  procura o primeiro elemento HTML que corresponda ao seletor fornecido
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    //Aqui, é criada uma matriz vazia chamada errors. Essa matriz será usada para armazenar mensagens de erro, se houver algum problema com os valores dos campos do formulário.
    const errors = [];

    //Essa instrução verifica se o valor do campo de entrada de usuário (username) está vazio após remover os espaços em branco no início e no fim usando o método trim(). Se estiver vazio, uma mensagem de erro é adicionada à matriz errors
    if(username.value.trim() === ""){
        errors.push("Username is required");
    }

    //Essa instrução verifica se o valor do campo de entrada de senha (password) tem um comprimento menor que 4 caracteres. Se for o caso, uma mensagem de erro é adicionada à matriz errors.
    if(password.value.length < 4){
        errors.push("Password must be at least 4 characters");
    }

    //Ao contrário da validação acima, essa instrução verifica se o valor do campo de entrada de senha (password) tem um comprimento maior que 10 caracteres. Se for o caso, uma mensagem de erro é adicionada à matriz errors.
    if(password.value.length > 10){
        errors.push("Password must be less than 10 characters");
    }

    //Essa instrução verifica se a matriz errors contém alguma mensagem de erro. Se a matriz tiver algum elemento, significa que houve problemas de validação
    if(errors.length > 0){
        //Impede o envio do formulário
        e.preventDefault();
        //Alterna o atributo hidden do elemento errorMessage, tornando-o visível para exibir as mensagens de erro.
        errorMessage.toggleAttribute('hidden');
        //Alterna o atributo hidden do elemento errorMessage, tornando-o visível para exibir as mensagens de erro.
        errorMessage.innerHTML = errors.join(', ');
    }
})