
import axios from 'axios';

var url = 'https://cnodejs.org/api/v1/accesstoken';

export default {
    login(data,callback){
        axios.post(url,data,{
            dataType:'json'
        })
        .then(val=>{
            callback(null,val);
        })
        .catch(e=>console.log(e));
    }
}

// login(){
//     login.login({
//         accesstoken : 'dc047a60-d35f-4e11-94a4-775a562f83ed'
//     },()=>{
//         console.log('222222')
//     })
// },