<template>
    <div>
        <div class="reply" v-for="(item,index) in replies">
            <div :id="item.id">
                <img :src="item.author.avatar_url" class="avatar" title="头像">
                <span class="user-info">
                    <a :href="'/user/'+item.author.loginname" class="user-name">{{item.author.loginname}}</a>
                    <a :href="'#'+item.id" class="user-numtime">{{index + 1}}楼@{{eachFloorTime[index]}}</a>
                </span>
                <span class="tag" v-if="item.id === author">作者</span>
                <span class="iconfont awsome">&#xe83b;</span>
            </div>
            <div class="content" v-html="item.content">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['replies','author','eachFloorTime'],
        data(){
            return {
                name : 'reply'
            }
        },
        created(){
        },
        methods : {

        },
    }
</script>
<style>
    .reply {
        background-color:#fff;
        padding-top : .8rem;
        padding-bottom : .8rem;
        padding-left : .6rem;
        padding-right : .6rem;
    }
    .reply + .reply {
        border-top : 1px solid #eee;
    }
    .avatar {
        width : 3rem;
        height : 3rem;
        font-size : 0;
        vertical-align : -1rem;
    }
    .user-info {
        font-size :  1.3rem;
        display : inline-block;
    }
    .user-name {
        color : #666;
    }
    .user-name:visited {
        color:#666;
    }
    .content {
        padding-top : .8rem;
        text-indent : 2em;
    }
    .awsome {
        float:right;
        margin-right:1rem;
    }
</style>