<template>
  <div class="nav-right">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#f0f3f5"
      text-color="black">
      <el-menu-item index="1" ><router-link to="/navRightAndList" tag="li" >选项1</router-link></el-menu-item>
      <el-menu-item index="2" ><router-link to="/test2" tag="li">选项2</router-link></el-menu-item>
      <el-menu-item index="3" ><router-link to="/test3" tag="li">选项3</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
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
</style>

