<template>
    <div class="navNavigation">
          <el-row>
            <el-col :lg="20">
              <el-menu
                class="el-menu-demo nav"
                mode="horizontal"
                background-color="#f0f3f5"
                text-color="black"
                >
                  <el-menu-item index="1" class="nav-item"><router-link to="/navRightAndList" tag="li">选项1</router-link></el-menu-item>
                  <el-menu-item index="2" class="nav-item"><router-link to="/test2" tag="li">选项2</router-link></el-menu-item>
                  <el-menu-item index="3" class="nav-item"><router-link to="/test3" tag="li">选项3</router-link></el-menu-item>
              </el-menu>
            </el-col>
            <el-col :lg="4" class="user-use">
              <el-row v-if="view">
                <el-col :lg="12">
                  <router-link to="/login" >登录</router-link>
                </el-col>
                <el-col :lg="12">
                  <router-link to="/register" >注册</router-link>
                </el-col>
              </el-row>
              <el-row v-else>
                <el-col :offset="12" :lg="12">
                  <el-dropdown>
                    <router-link to="/userSetting" >
                    <span class="el-dropdown-link">
                      设置<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    </router-link>
                    <el-dropdown-menu slot="dropdown">
                      <router-link to="/userSetting" >
                        <el-dropdown-item>设置</el-dropdown-item>
                      </router-link>
                      <router-link to="/userSafe" ><el-dropdown-item>账号安全</el-dropdown-item></router-link>
                      <router-link to="/userZoon" ><el-dropdown-item>个人空间</el-dropdown-item></router-link>
                      <span v-on:click="getUp"><el-dropdown-item >退出</el-dropdown-item></span>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
        </el-row>
      </div>
</template>
<script>
export default {
  data() {
    return {
      view: false,
    }
  },
  methods:{
    getUp(){
      console.log("getUp")
      this.view = true;
    }
  }
}
</script>

<style lang="less" scoped>


.nav{
  height: 30px;
  li{
    height: 30px;
    line-height: 30px;
    font-size: 10px
  }
}

.user-use{
  background-color: #f0f3f5;
  a{
    height: 30px;
    line-height: 30px;
    list-style: none;
    font-size: 12px;
    cursor:pointer;
  }
}
</style>
