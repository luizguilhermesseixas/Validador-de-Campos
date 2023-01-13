import validator from 'validator';
import './style.css';

const campoDeTexto = document.querySelector('#valor');
const botao = document.querySelector('#validationBtn');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#resultado');
const validaUUID = 4;

botao.addEventListener('click', (event) => {
    event.preventDefault();
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
        hexColor: validator.isHexColor(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid: validator.isUUID(campoDeTexto.value, validaUUID),
        url: validator.isURL(campoDeTexto.value),
    };
    textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
