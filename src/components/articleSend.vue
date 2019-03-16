<template>
    <div>
        <el-row class="head">
            <el-col offset="1" :lg="2"><h2>发新帖</h2></el-col>
            <el-col :lg="10" class="headDetail"><p>你输入的内容自动保存于 14:40:34 转帖请务必注明原文链接，否则可能被直接删除</p></el-col>
        </el-row>
        <el-row>
            <el-col offset="2" :lg="1">
                标题:
            </el-col>
            <el-col  :lg="15">
                <div>
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" >
                        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 90px;">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                    </el-input>
                </div>
            </el-col>
        </el-row>
        <el-row class="sendContent">
            <el-col :offset="2" :lg="1">
                内容：
            </el-col>
            <el-col :lg="15">
                <div class="edit_container">
                    <quill-editor 
                        v-model="content" 
                        ref="myQuillEditor" 
                        :options="editorOption" 
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
                    </quill-editor>
                    <el-row class="send">
                        <el-col :offset="22"><el-button type="primary" v-on:click="send">发送</el-button></el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="less" scoped>
.head{
    padding: 50px;
  .headDetail{
      font-size: 13px;
  }   
}
.sendContent{
    margin-top: 20px;
    .send{
        margin-top: 20px;
    }
}
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  
</style>

<script>
export default {
  data() {
    return {
      input5: '',
      select: ''
    }
  }
}
</script>
