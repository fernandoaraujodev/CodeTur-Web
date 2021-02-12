const logar = dados => {
    return fetch('https://192.168.0.16:5001/v1/account/signin', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })
}

export default {
    logar
    //outros metodos,
}