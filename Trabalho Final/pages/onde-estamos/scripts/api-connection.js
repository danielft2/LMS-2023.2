function startOptions() {
    const selectElement = document.querySelector('.onde-estamos-select');

    // Obter a opção padrão (selecionada)
    const selectedOption = selectElement.options[selectElement.selectedIndex].textContent;

    obterEstados().then(estados => {
        const estadoSelecionado = obterEstadoPorNome(selectedOption, estados);

        if (estadoSelecionado) {

            const district_uf_item_1 = document.getElementById('district-uf-item-1');
            district_uf_item_1.textContent = estadoSelecionado.sigla;

            const district_uf_item_2 = document.getElementById('district-uf-item-2');
            district_uf_item_2.textContent = estadoSelecionado.sigla;

            const district_uf_item_3 = document.getElementById('district-uf-item-3');
            district_uf_item_3.textContent = estadoSelecionado.sigla;

            const uf = estadoSelecionado.sigla
            obterDistritosPorUF(uf).then(distritos => {
                if (distritos && distritos.length > 0) {

                    const distritoAleatorio1ToField1 = distritos[Math.floor(Math.random() * distritos.length)];
                    const distritoAleatorio2ToField2 = distritos[Math.floor(Math.random() * distritos.length)];
                    const distritoAleatorio3ToField3 = distritos[Math.floor(Math.random() * distritos.length)];


                    const district_name_item_1 = document.getElementById('district-name-item-1');
                    district_name_item_1.textContent = distritoAleatorio1ToField1.nome
                    const district_name_item_2 = document.getElementById('district-name-item-2');
                    district_name_item_2.textContent = distritoAleatorio2ToField2.nome
                    const district_name_item_3 = document.getElementById('district-name-item-3');
                    district_name_item_3.textContent = distritoAleatorio3ToField3.nome

                    const numberField1 = document.getElementById('numer-item-1');
                    numberField1.textContent = generateRandomPhoneNumber()

                    const numberField2 = document.getElementById('numer-item-2');
                    numberField2.textContent = generateRandomPhoneNumber()

                    const numberField3 = document.getElementById('numer-item-3');
                    numberField3.textContent = generateRandomPhoneNumber()

                    console.log('Distrito Aleatório:', distritoAleatorio1ToField1);
                } else {
                    console.log('Nenhum distrito encontrado para o UF fornecido.');
                }
            });
            console.log('Estado Selecionado:', estadoSelecionado.sigla);
        } else {
            console.log('Estado não encontrado');
        }
    });

    // Agora, você pode salvar a opção em uma variável, enviar para o servidor, etc.
    console.log('Opção padrão selecionada:', selectedOption);
}

startOptions();


function obterEstados() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(estados => {
            return estados;
        })
        .catch(error => {
            console.error('Erro durante a requisição:', error);
        });
}

function obterDistritosPorUF(uf) {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(distritos => {
            return distritos;
        })
        .catch(error => {
            console.error('Erro durante a requisição:', error);
        });
}



function obterEstadoPorNome(nome, estados) {
    return estados.find(estado => estado.nome === nome);
}

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.onde-estamos-select');


    selectElement.addEventListener('change', function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const nomeEstadoSelecionado = selectedOption.textContent;

        obterEstados().then(estados => {
            const estadoSelecionado = obterEstadoPorNome(nomeEstadoSelecionado, estados);

            if (estadoSelecionado) {

                const district_uf_item_1 = document.getElementById('district-uf-item-1');
                district_uf_item_1.textContent = estadoSelecionado.sigla;

                const district_uf_item_2 = document.getElementById('district-uf-item-2');
                district_uf_item_2.textContent = estadoSelecionado.sigla;

                const district_uf_item_3 = document.getElementById('district-uf-item-3');
                district_uf_item_3.textContent = estadoSelecionado.sigla;

                const uf = estadoSelecionado.sigla
                obterDistritosPorUF(uf).then(distritos => {
                    if (distritos && distritos.length > 0) {

                        const distritoAleatorio1ToField1 = distritos[Math.floor(Math.random() * distritos.length)];
                        const distritoAleatorio2ToField2 = distritos[Math.floor(Math.random() * distritos.length)];
                        const distritoAleatorio3ToField3 = distritos[Math.floor(Math.random() * distritos.length)];

                        const district_name_item_1 = document.getElementById('district-name-item-1');
                        district_name_item_1.textContent = distritoAleatorio1ToField1.nome;
                        const district_name_item_2 = document.getElementById('district-name-item-2');
                        district_name_item_2.textContent = distritoAleatorio2ToField2.nome
                        const district_name_item_3 = document.getElementById('district-name-item-3');
                        district_name_item_3.textContent = distritoAleatorio3ToField3.nome

                        const numberField1 = document.getElementById('numer-item-1');
                        numberField1.textContent = generateRandomPhoneNumber()

                        const numberField2 = document.getElementById('numer-item-2');
                        numberField2.textContent = generateRandomPhoneNumber()

                        const numberField3 = document.getElementById('numer-item-3');
                        numberField3.textContent = generateRandomPhoneNumber()

                        console.log('Distrito Aleatório:', distritoAleatorio1ToField1);
                    } else {
                        console.log('Nenhum distrito encontrado para o UF fornecido.');
                    }
                });
                console.log('Estado Selecionado:', estadoSelecionado.sigla);
            } else {
                console.log('Estado não encontrado');
            }
        });
    });
});
function generateRandomPhoneNumber() {
    // Definir o DDD como 85
    var ddd = 85;

    // Gerar o número de telefone começando com 9, seguido por 8 ou 9 (decidido aleatoriamente),
    // e mais sete dígitos aleatórios
    var firstDigit = '9';
    var secondDigit = Math.random() < 0.5 ? '8' : '9';
    var restOfNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');

    var phoneNumber = firstDigit + secondDigit + restOfNumber;

    // Formatando o número no formato brasileiro
    var formattedPhoneNumber = '(' + ddd + ') ' + phoneNumber;

    return formattedPhoneNumber;
}

// Exemplo de uso
var randomPhoneNumber = generateRandomPhoneNumber();
console.log(randomPhoneNumber);
