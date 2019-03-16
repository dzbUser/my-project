<template>
    <el-row>
        <el-col :offset="8" :lg="8">
            <el-row class="resign">
                <el-row class="password">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请输入密码" v-model="password"  type="password"></el-input></el-col>
                </el-row>
                <el-row class="password">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请再次输入密码" v-model="password1"  type="password"></el-input></el-col>
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
        password:'',
        password1:'',
        verification:''
      }
    }
}
</script>

<style lang="less" scoped>
.resign{
    margin-top: 100px;
    background-color: #f0f3f5;
    padding-top: 50px;
    padding-bottom: 50px;
    .password{
        margin-top: 20px;
    }


    .send{
        margin-top: 20px;
    }
}
</style>
