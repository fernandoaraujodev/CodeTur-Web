import axios from "axios";

export default axios.create({
    
    //casa
    baseURL : 'https://192.168.0.16:5001/v1/',
    
    headers : {
        'content-type' : 'application/json'
    }
})
