<template>
    <div  class="article">
        <!-- 版块介绍 -->
        <el-row>
            <el-col :lg="21">
                <div class="article-detail">
                     
版块介绍：凯尔特人绿衫军的球迷大本营，我们都爱这个球队，如果你有对凯尔特人的评论、感言、图片等，欢迎来与我们分享！ 
版主：丝绸先生    五碳糖    焦焦笑了    凯尔特兔    以赛亚打托马斯    sjp守夜人(实习)   yuleihaohao(实习)   gdbssaa(实习)       
                </div>
            </el-col>
        </el-row>
        <!-- 排行主题及发帖 -->
        <el-row class="sort-send">
            <el-col :lg = "8" class="sort-title">
                <!-- 主题排行 -->
                <el-menu
                class="el-menu-demo nav"
                mode="horizontal"
                background-color="#f0f3f5"
                text-color="black"
                >
                  <el-menu-item index="1" class="nav-item"><router-link to="/article/list" tag="li">最受欢迎</router-link></el-menu-item>
                  <el-menu-item index="2" class="nav-item"><router-link to="/test2" tag="li">收藏最多</router-link></el-menu-item>
                  <el-menu-item index="3" class="nav-item"><router-link to="/test3" tag="li">最新帖子</router-link></el-menu-item>
                  <el-menu-item index="3" class="nav-item"><router-link to="/test3" tag="li">选项3</router-link></el-menu-item>
              </el-menu>
            </el-col>    
            <!-- 发帖按钮 -->
            <el-col :lg = "4" :offset = "12" class="send">
                <el-button ><router-link to="/articleSend">发新帖</router-link></el-button>
            </el-col>
        </el-row>
        <!-- 帖子列表 -->
        <el-row class="article-list">  
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    label="主题"
                    min-width="60%">
                    <template slot-scope="scope">
                    <router-link :to="'/'+scope.row.date" tag="li">{{scope.row.date}}</router-link>
                    </template>
                </el-table-column>
                <el-table-column
                    label="作者"
                    min-width="20%">
                    <template slot-scope="scope">
                        <router-link :to="'/'+scope.row.date" tag="li">{{scope.row.name}}</router-link>
                    </template>
                </el-table-column>
                <el-table-column
                    label="回复/浏览"
                    min-width="20%"
                    > 
                    <template slot-scope="scope">
                        <router-link :to="'/'+scope.row.date" tag="li">{{scope.row.address}}</router-link>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <!-- 分页 -->
        <el-row class="page">
            <el-col>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            date: 'articleDetail',
            name: '王小虎',
            address: '上海市普陀区1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区1516 弄'
          }]
        }
      }
    }
  </script>
  
<style lang="less" scoped>
li{
    list-style: none;
    cursor: pointer;
}
.article{
    padding-left: 10px;
    .article-detail{
        padding: 50px;
        border: 1px solid #aaa;
        background-color: #f0f3f5;
        font-size: 15px;
    }
}
.sort-send{
    padding-top: 20px;
    .sort-title{
        li{
            height: 30px;
            line-height: 30px;
        }
    }
    .send{
        button{
            height: 30px;
            font-size: 10px;
            padding: 10px 20px;
            background-color: #f0f3f5;
        }
    }
}

.page{
    margin-top: 40px;
    th{
        cursor: pointer;
    }
}
</style>

