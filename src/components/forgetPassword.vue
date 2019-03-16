<template>
    <el-row>
        <el-col :offset="8" :lg="8">
            <el-row class="resignPassword">
                <el-row class="email">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请输入邮箱" v-model="email"></el-input></el-col> 
                </el-row>
                <el-row class="verification">
                    <el-col :lg="8" :offset="4"><el-input placeholder="请输入验证码" v-model="verification"></el-input></el-col>
                </el-row>
                <el-row class="send">
                    <el-col :lg="4" :offset="10"><el-button type="primary">重置密码</el-button></el-col>
                </el-row>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        email: '',
      }
    }
}
</script>

<style lang="less" scoped>
.resignPassword{
    margin-top: 100px;
    background-color: #f0f3f5;
    padding-top: 50px;
    padding-bottom: 50px;

    .verification{
        margin-top: 20px;
    }

    .send{
        margin-top: 20px;
    }
}
</style>
