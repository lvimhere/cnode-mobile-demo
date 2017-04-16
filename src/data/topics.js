import axios from 'axios';

var url = 'https://cnodejs.org/api/v1/topics';


export default {
    getList(params,callback){
        axios.get(url,{
            params : params
        })
        .then(val => {
            // console.log(params)
            // console.log(val)
            callback(null,val)
        })
        .catch(e => callback(e));
    }
}