import http from '../utils/http-axios';

const listar = () => {
    return http.get('package', {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}
const cadastrar = dados => {
    return http.post('package', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-codetur')}`
        }
    });
}
export default {
    listar,
    cadastrar
}