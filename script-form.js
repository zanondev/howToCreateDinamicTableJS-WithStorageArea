//pegar id das tags/inputs
const form = document.getElementById("form");
const clientName = document.getElementById("name");
const clientCpf = document.getElementById("cpf");
const clientBirth = document.getElementById("date-birth");
const clientObs = document.getElementById("obs");

const submitEvent = (event) => { //funcao para evento de submit
    event.preventDefault(); 

    //criando um objeto cliente
    const client = {
        nome: clientName.value,
        cpf: clientCpf.value,
        birthDate: clientBirth.value,
        obs: clientObs.value,
    };

    var clientsString = localStorage.getItem('clients');
    var clients = [];

    if (clientsString) {
        clients = JSON.parse(clientsString);
    }

    clients.push(client);

    //inserindo lista no local storage
    const clientString = JSON.stringify(clients); //constante recebendo a lista em JSON
    window.localStorage.setItem('clients', clientString); //setando o JSON no local storage
    window.alert("cliente cadastrado com sucesso!")

    setTimeout(function () { //redirecionar para a pagina de lista de clientes
        window.location.href = "http://127.0.0.1:5500/lista-clientes.html";
    }, 1000);

}

form.addEventListener('submit', submitEvent);



