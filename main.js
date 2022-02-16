// Selecionando o CEP, através da id 'cep'
const cep = document.querySelector('#cep');

const showData = (result) => {
    for (let campo in result) {

        //Verificando se existe os 'id'
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo];
        };
    };
};

cep.addEventListener('blur', (e) => {

    // Substituindo os caracteres traço('-') por nada('')
    const search = cep.value.replace('-', '');

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    fetch(`https://viacep.com.br/ws/${search}/json`, options)

        // Se estiver tudo OK:
        .then(res => {
            res.json()

                // Retorna os dados em JSON
                .then(data => showData(data));
        })

        // Se não funcionar:
        .catch(erro => console.log("Status: [ERRO]" + erro, message));
});
