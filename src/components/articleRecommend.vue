<template>
    <div class="recommend">
        <el-row class="title">
            <h2>最新帖子</h2>
        </el-row>
        <el-row class="recommendList">
            <ul>
                <li><router-link to="">没有那么差，但确实很失望 asdasd</router-link></li>
                <li><router-link to="">没有那么差，但确实很失望 </router-link></li>
                <li><router-link to="">没有那么差，但确实很失望 </router-link></li>
            </ul>
        </el-row>
    </div>
</template>

<style lang="less" scoped>
.recommend{
    position: fixed;
    top: 100px;
    border: 1px solid #aaaaaa;
    padding: 20px;
    height: 400px;
    title{
        height: 30px;
        width: 100%;
        background-color: #f0f3f5;
        border-bottom: 1px solid #aaaaaa;
    }
    .recommendList{
        li{
            list-style: none;
            height: 40px;
            line-height: 40px;
            a{
                font-size:15px;
            }
            border-bottom: 1px solid #aaaaaa;
        }
    }
}
</style>

