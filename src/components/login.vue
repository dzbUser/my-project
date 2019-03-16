<template>
    <el-row class="all">
        <el-row class="login">
            <el-col :offset="8" :lg="8">
                <el-row class="loginDetail">
                    <el-row class="userName">
                        <el-col :lg="16" :offset="3"><el-input placeholder="请输入账号" v-model="userName"></el-input></el-col> 
                    </el-row>
                    <el-row class="password">
                        <el-col :lg="16" :offset="3"><el-input placeholder="请输入密码" v-model="password"  type="password"></el-input></el-col>
                    </el-row>
                    <el-row class="verification">
                        <el-col :lg="8" :offset="3"><el-input placeholder="请输入验证码" v-model="verification"></el-input></el-col>
                    </el-row>
                    <el-row class="send">
                        <el-col :lg="4" :offset="10"><el-button type="primary">登录</el-button></el-col>
                    </el-row>
                </el-row>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        userName: '',
        password:'',
        verification:''
      }
    }
}
</script>

<style lang="less" scoped>

.login{
    
}
.loginDetail{
    margin-top: 100px;
    background-color: #f0f3f5;
    padding-top: 50px;
    padding-bottom: 50px;
    .userName{

    }
    .password{
        margin-top: 20px;
    }

    .verification{
        margin-top: 20px;
    }

    .send{
        margin-top: 20px;
    }
}
</style>
