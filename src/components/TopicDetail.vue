<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <button type="button" class="mui-btn mui-btn-outlined">
                <a href="javascript:history.go(-1);">返回</a>
            </button>
            <h1 class="mui-title ellipsis">{{title}}</h1>
            <!--<button type="button" class="mui-btn mui-btn-primary">回复</button>-->
        </header>
        <div class="topic topic-title">
            <h1>{{title}}</h1>
            <div class="changes">
                •发布于一个月前•作者{{loginname}}•{{visit_count}}次浏览
            </div>
        </div>
        <div class="topic topic-detail" v-html="topicContent">
        </div>
        <reply :replies="replies" :author="author_id" :each-floor-time="eachFloorTime"></reply>
        <div class="separate"></div>
        <to-reply :topic_id="topic_id"></to-reply>
    </div>
</template>
<script>
    import axios from 'axios';  
    import * as data from '../../static/detail.json';
    import Reply from './Reply';
    import ToReply from './ToReply';
    import util from '../assets/util.js';
    export default {
        components : {
            Reply : Reply,
            ToReply:ToReply
        },
        data(){
            return {
                data : data,
                replies : '',
                author_id : '',
                eachFloorTime : [],
                topicContent : '',
                resource : '',
                loginname : '',
                visit_count : '',
                title : '',
                topic_id: ''
            }
        },
        methods : {
        },
        beforeRouteEnter(to,from,next){
            var that = this;
            // console.log(to);
            axios.get('http://cnodejs.org/api/v1/topic/'+to.params.id)
                .then(function(res){
                    // that.replies = res.data.data.replies;
                    console.log(res)
                    next(function(vm){
                        vm.replies = res.data.data.replies;
                        // vm.resource = res.data.data;
                        vm.topicContent = res.data.data.content;
                        vm.author_id = res.data.data.author_id;
                        vm.loginname = res.data.data.author.loginname;
                        vm.visit_count = res.data.data.visit_count;
                        vm.title = res.data.data.title;
                        vm.topic_id = to.params.id;
                        
                    });
                })
                .then(function(err){
                    if(err) throw err;
                });
        },
        created(){
            var that = this;
            that.data.data.replies.forEach(function(data){
                var time = new Date(data.create_at);
                var create_at =  `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
                that.eachFloorTime.push(create_at);
            });
        }
    }
</script>
<style>
    .topic {
        margin-left:.4rem;
        margin-right:.4rem;
        padding-top : .4rem;
        padding-left:.4rem;
        padding-right:.4rem;   
        background-color:#fff;
        border-radius:4px;
    }
    .topic-title {
        border-bottom : 1px solid #ccc;
        padding-top:4.4rem;
    }
    .topic-detail p {
        font : 1.2rem/1.5 normal;
    }
    .topic-detail li {
        font : 1.2rem/1.5 normal;
    }
    .changes {
        color:#838383;
        font-size : 1.2rem;
    }
    .mui-title {
        position:static;
        width:18rem !important;
    }
</style>