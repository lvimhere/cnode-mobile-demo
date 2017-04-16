<template>
    <div>
        <textarea style="width:100%;height:200px;" :value="input" @input="update"></textarea>
        <button type="button" class="mui-btn mui-btn-primary" @click="doReply">回复</button>
    </div>
</template>
<script>
    import toReply from '../data/toReply';
    import login from '../data/login';
    export default {
        data(){
            return {
                input : '测试测试测试，支持markdown语法',
            }
        },
        props:{
            topic_id : {
                default : ''
            }
        },
        computed : {
        },
        methods :{
            update(e) {
                this.input = e.target.value
            },
            doReply(){
                var that = this;
                 toReply.reply(that.topic_id,{
                     accesstoken : 'dc047a60-d35f-4e11-94a4-775a562f83ed',
                     content : that.input,
                     reply_id : ''
                 },()=>{
                     mui.toast('回复成功')
                 })
            }
        }
    }
</script>
<style>
    
</style>