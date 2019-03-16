<template>
    <el-row>
        <el-col :offset="8" :lg="8">
            <el-row class="login">
                <el-row >
                    <el-col :lg="16" :offset="4"><el-input placeholder="请输入账号" v-model="userName"></el-input></el-col> 
                </el-row>
                <el-row class="marTop20Px">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请输入密码" v-model="password"  type="password"></el-input></el-col>
                </el-row>
                 <el-row class="marTop20Px">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请再次输入密码" v-model="password1"  type="password"></el-input></el-col>
                </el-row>
                <el-row class="marTop20Px">
                    <el-col :lg="16" :offset="4"><el-input placeholder="请输入邮箱" v-model="email"></el-input></el-col> 
                </el-row>
                <el-row>
                    <el-col :lg="16" :offset="4" class="marTop20Px">
                        <el-autocomplete
                            class="inline-input"
                            v-model="state2"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入学校"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                            style="width:100%;"
                        >
                        </el-autocomplete>
                    </el-col> 
                </el-row>
                <el-row class="marTop20Px">
                    <el-col :lg="8" :offset="4"><el-input placeholder="请输入验证码" v-model="verification"></el-input></el-col>
                </el-row>
                <el-row class="marTop20Px">
                    <el-col :lg="4" :offset="10"><el-button type="primary">注册</el-button></el-col>
                </el-row>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        userName: '',
        password:'',
        password1:'',
        verification:'',
        email:'',
        schools:[],
        state2: ''
      }
    },
     methods: {
      querySearch(queryString, cb) {
        var schools = this.schools;
        console.log(schools)
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
        console.log(item);
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
.login{
    margin-top: 100px;
    background-color: #f0f3f5;
    padding-top: 50px;
    padding-bottom: 50px;

    .marTop20Px{
        margin-top: 20px;
    }

}
</style>
