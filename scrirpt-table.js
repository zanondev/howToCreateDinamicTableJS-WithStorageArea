const table = document.getElementById("table"); //pegando a tag table por id

const addTable = () => { // funcao para adicionar o objeto na tabela

    //pegar informação do localstorage
    const clientsString = window.localStorage.getItem('clients');
    const clientObj = JSON.parse(clientsString);

    for (const client of clientObj) { //percorrer lista de array de clientes
        const tbody = table.getElementsByTagName("tbody"); //pegando a tag tbody por nome de tag
        const newRow = document.createElement('tr'); //criar tag TR 

        //nome
        const columnName = document.createElement('td'); //criar tag TD 
        columnName.textContent = client.nome;
        newRow.appendChild(columnName);
        //cpf
        const columnCpf = document.createElement('td');
        columnCpf.textContent = client.cpf;
        newRow.appendChild(columnCpf);
        //data de nascimento
        const columnBirth = document.createElement('td');
        columnBirth.textContent = client.birthDate;
        newRow.appendChild(columnBirth);
        //observação
        const columnObs = document.createElement('td');
        columnObs.textContent = client.obs;
        newRow.appendChild(columnObs);

        //cria linha nova na primeira posicao do corpo da tabela
        tbody[0].appendChild(newRow);
    }
}

addTable(); //executar funcao
