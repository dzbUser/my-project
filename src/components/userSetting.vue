<template>
    <el-row class="userSetting">
        <el-row>
            <el-row class="title"><h3>设置</h3></el-row>
            <el-row class="setting">
                <el-col :offset="8">
                    <el-row>
                        <el-col :lg="1" >
                            头像：
                        </el-col>
                        <el-col :lg="1">
                            <img src="https://i1.hoopchina.com.cn/user/default_small.jpg"/>
                        </el-col>
                        <el-col :lg="1">
                            <router-link to=""  class="updateImg">更改</router-link>
                        </el-col>
                    </el-row>
                    <el-row class="marginTop20px" style="">
                        <el-col :lg="6"><el-input :placeholder="userName" v-model="userName"></el-input></el-col> 
                        <el-col class="updateEmail" :lg="1"><router-link to="">更改</router-link></el-col>
                    </el-row>
                    <el-row class="marginTop20px" style="">
                        <el-col :lg="6"><el-input :placeholder="email" v-model="email"></el-input></el-col> 
                        <el-col class="updateEmail" :lg="1"><router-link to="">更改</router-link></el-col>
                    </el-row>
                    <el-row class="marginTop20px">
                        <el-col :lg="6"  >
                            <el-autocomplete
                                class="inline-input"
                                v-model="state2"
                                :fetch-suggestions="querySearch"
                                :placeholder="school"
                                :trigger-on-focus="false"
                                @select="handleSelect"
                                style="width:100%;"
                            >
                            </el-autocomplete>
                            
                        </el-col> 
                         <el-col class="lineHeight40px marginLeft10px"  :lg="1"><router-link to="">更改</router-link></el-col>
                    </el-row>
                    <el-row class="marginTop20px">
                        <el-col :offset="2" :lg="4" ><el-button type="primary">更改</el-button></el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        userName: 'haha',
        password:'',
        password1:'',
        verification:'',
        email:'544646251@qq.com',
        schools:[],
        state2: '',
        school:'广东技术师范学院',
      }
    },
     methods: {
      querySearch(queryString, cb) {
        var schools = this.schools;
        var results = queryString ? schools.filter(this.createFilter(queryString)) : schools;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (schools) => {
          return (schools.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        this.school = item.value;
        console.log(this.school)
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
        ];
      }
      
     },
     mounted() {
        this.schools = this.loadAll();
        console.log(11)
      }
     
} 
</script>

<style lang="less" scoped>
.userSetting{
    padding: 50px;
    border: 1px solid #aaaaaa;
    .title{
        border-bottom: 1px solid #aaaaaa;
    }
    .setting{
        margin-top: 20px;
        font-size: 15px;
        .updateImg{
            line-height: 45px;
        }
    }
    img{
        width: 45px;
        height: 45px;
    }
    .updateEmail{
        margin-left: 10px;
        line-height: 40px;
    }
}

.marginTop20px{
    margin-top:20px;
}

.lineHeight40px{
    line-height: 40px;
}
.marginLeft10px{
    margin-left: 10px;
}
</style>

