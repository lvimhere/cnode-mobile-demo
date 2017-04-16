import axios from 'axios';

// var url = 'https://cnodejs.org/api/v1/topic/:topic_id/replies'

export default {
    reply(topic_id,data,callback){
        axios.post('https://cnodejs.org/api/v1/topic/'+topic_id+'/replies',data)
        .then(val=>{
            callback(null,val);
        })
        .catch(e=>callback(e));
    }
}

//dc047a60-d35f-4e11-94a4-775a562f83ed