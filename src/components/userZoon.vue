<template>
   <el-row>
       <!-- 右边导航 -->
        <el-col :lg="3">
            <div class="nav-right">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#f0f3f5"
                text-color="black">
                <el-menu-item index="1" ><router-link to="/navRightAndList" tag="li" >我的发送</router-link></el-menu-item>
                <el-menu-item index="2" ><router-link to="/test2" tag="li">我的收藏</router-link></el-menu-item>
                <el-menu-item index="3" ><router-link to="/test3" tag="li">浏览记录</router-link></el-menu-item>
                </el-menu>
            </div>
        </el-col>
            
        <el-col :lg="21">
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
        </el-col>   
    </el-row>     
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
.nav-right{
  .el-menu-vertical-demo{
    height: 700px;
  }

  li{
    height: 40px;
    line-height: 40px;
    font-size: 10px;
  }
}

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
