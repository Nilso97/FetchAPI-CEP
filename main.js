// Selecionando o CEP, através da id 'cep'
const cep = document.querySelector('#cep');

const showData = (result) => {
    for(let campo in result) {

        //Verificando se existe os 'id'
        if(document.querySelector('#' + campo)) {  
            document.querySelector('#' + campo).value = result[campo];
        }
    }
}

cep.addEventListener('blur', (e) => {

    // Substituindo os caracteres traço('-') por nada('')
    let search = cep.value.replace('-', '');

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    
    // Se der certo:
    .then(response => {response.json()
        
        // Retorna os dados em JSON
        .then(data => showData(data))
    })
    
    // Se não der certo:
    .catch(erro => console.log("Deu erro" + erro,message))
})

