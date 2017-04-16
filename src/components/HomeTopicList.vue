<template>
    <ul class="mui-table-view infinite-scroll" v-infinite-scroll="loadMore">
        <li class="mui-table-view-cell mui-media" v-for="item in list" track-by="$index">
            <a :href="'/topic/'+item.id">
                <img class="mui-media-object mui-pull-right" :src="item.author.avatar_url">
                <div class="mui-media-body mui-ellipsis">
                    {{item.title}}
                    <p class='mui-ellipsis'>
                        <span class="read-browser">
                            {{item.reply_count}}/{{item.visit_count}}
                        </span>
                        <span class="f-r">
                            {{item.create_at}}
                        </span>
                    </p>
                </div>
            </a>
        </li>
    </ul>
</template>
<script>
    import topics from '../data/topics.js';
    import * as data from '../../static/data.json';
    var now = new Date();
    export default {
        data(){
            return {
                list : [],
                length : '',
                limit : 10,
                isShow : false,
                isLoading : false,
                page : 1
            }
        },
        created(){
            this.get();
        },
        methods : {
            get(){
                topics.getList({
                    page : this.page,
                    limit : this.limit
                },(err,list)=>{
                    // console.log(err)
                    // console.log(list.data.data)
                    if(err){
                        console.log(err)
                    }else{
                        list.data.data.forEach((data)=>{
                            var time = new Date(data.create_at);
                            data.create_at =  `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
                        });
                        this.list = this.list.concat(list.data.data);
                        this.isLoading = false;
                    }
                });
            },
            loadMore(){
                if(this.isLoading){
                    return;
                }
                this.isLoading = true;
                this.page ++ ;
                this.get();
            }
        },
        watch : {
            page(val){
                this.get()
            }
        }
    }
</script>
<style scoped>
    .topic-one {
        // background-color:green;
        padding-top:1rem;
        padding-bottom:1rem;
        padding-left:.8rem;
        border-top:1px solid #eee;
        background-color:#fff;
    }
    .avatar {
        height: 3rem;
        width: 3rem;
        font-size: 0;
        vertical-align:-1rem;
    }
    .content-box {
        display:inline-block;
        width:24.5rem;
    }
    .content {
        display: inline-block;
        width: 24.5rem;
        max-width:24.5rem;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        margin-bottom:-.3rem;
        font-size:1.4rem;
        /*
            TODO 添加省略号
        */
    }
    .content-info {

    }
    .content-info .read-browser {
        float:left;
        color : #ccc;
    }
    .content-info .last-repeat {
        float:right;
        color:#ccc;
    }
    .infinite-scroll {
    }
</style>