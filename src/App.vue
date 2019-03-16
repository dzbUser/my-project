<template>
  <div id="app">
    <!-- 导航 -->
    <el-row >
      <el-col :lg="4" >
        <nav-img></nav-img>
      </el-col>
      <el-col :xs="10" :sm="10" :md="10" :lg="13" :xl="1" >
        <navNavigation></navNavigation>
      </el-col>
      <!-- 进入学校 -->
      <el-col :offset="1" :lg="6" class="nav-search" >
          <navSearch></navSearch>
      </el-col>
    </el-row>

    <router-view />
    
  </div>
</template>

<script>
import navImg from '@/components/nav/nav_img'
import navNavigation from '@/components/nav/navNavigation'
import navRightNav from '@/components/nav/navRightNav'
import navSearch from '@/components/nav/navSearch'
import navRightAndList from '@/components/navRightAndList'
export default {
  components: {
    navImg,
    navNavigation,
    navRightNav,
    navSearch,
    navRightAndList
  }
}
</script>

<style lang="less" scoped>
#app{
      width: 1300px;
      margin: 0 auto;
      margin-top: 10px;
}





</style>
