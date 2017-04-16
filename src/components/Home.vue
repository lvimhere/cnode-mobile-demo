<template>
    <div>
        <header class="header">
            <div class="logo-w">
                <img src="../assets/cnodejs_light.svg" class="logo-i">
            </div>
        </header>
        <nav class="nav">
            <ul>
                <li><a href="/" title="首页">首页</a></li>
                <li><a href="https://cnodejs.org/getstart" title="新手入门">新手入门</a></li>
                <li><a href="https://cnodejs.org/api" title="API">API</a></li>
                <li><a href="https://cnodejs.org/about" title="关于">关于</a></li>
            </ul>
        </nav>
        <div class="separate"></div>
        <home-topic-list></home-topic-list>
    </div>
</template>
<script>
import HomeTopicList from './HomeTopicList';
export default {
    data(){
        return {
            page : 1
        }
    },
    components : {
        HomeTopicList : HomeTopicList
    },
    created(){
    },
}
</script>
<style scoped>
    .header {
        height: 4rem;
        background-color: #333;
    }
    .logo-w {
        margin: 0 auto;
        padding-top: 0.8rem;
        width: 10rem;
    }
    .logo-i {
        font-size: 0;
    }
    .nav {

    }
    .nav ul {
        width:100%;
        display: table;
    }
    .nav li {
        display: table-cell;
        vertical-align:middle;
        padding: 0.4rem 0.8rem;
        text-align: center;
        font-size: 1.4rem;
    }
</style>