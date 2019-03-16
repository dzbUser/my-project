<template>
    <el-row>
      <el-col :span="3" >
        <navRightNav ></navRightNav>
      </el-col>
      <el-col :lg="21">
        <articleList></articleList>
      </el-col>
    </el-row>
</template>

<script>
import navRightNav from '@/components/nav/navRightNav'
import articleList from '@/components/articleList'
export default {
    components: {
    navRightNav,
    articleList
  }
}
</script>

