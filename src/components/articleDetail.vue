<template>
    <el-row class="articleDetail">
        <el-col :lg="16" class="articleContent">
            <el-row class="user-title">
                <el-col :lg="2" class="userImg">
                    <img src="https://i3.hoopchina.com.cn/user/543/275199356686543/275199356686543-1547475303.jpeg@45h_45w_2e" alt="haha">
                </el-col>
                <el-col :lg="20">
                    <el-row><span class="userDetail"><router-link to="">波小米</router-link> (41级) 楼主 2019-03-04 06:02</span></el-row>
                    <el-row><span class="aticle-title">反派影评:绿皮书6.5分——美国版《啥是佩奇》</span></el-row>
                </el-col>
            </el-row>
            
            <el-row class="contentDetail">
                反派影评:绿皮书6.5分——美国版《啥是佩奇》 由  波小米 发表在虎扑步行街·影视区 https://bbs.hupu.com/ent
                转自微信反派影评:<br/>


                隐形（青年编剧；《网络谜踪》等29期嘉宾）：7分；<br/>

                “白人司机的角色非常呆萌可爱，上路之后的剧情也极其流畅，而且影片的整体表达具备当下性。”<br/>

                田野（青年编剧，《登月第一人》等10期节目嘉宾，豆瓣“雪盲”）：6.5分；<br/>

                “影片的公路片层次感很强，比如随着深入南方，黑人主角的安全区域变得越来越小，开始时需要停留在黑人酒店，但到最后连呆在车中都会被警察找麻烦。”<br/>

                波米：6分；“阿里有至少四层身份：上等人、黑人、同性恋和音乐人，但最终只写他去黑人酒吧自我救赎，怎么不写他去同性恋酒吧或找到真正的乐迷呢？当你通片都在消费种族梗，就别怪从黑人原型家属到黑人导演都揪着你价值观不放了。”

            </el-row>
            <el-row class="comment">
                <h3 class="comment-title">回帖</h3>
                <ul>
                    <li>
                        <el-row class="comment-detail">
                            <el-col :lg="2" class="comment-user-img">
                                <img src="https://i1.hoopchina.com.cn/user/default_small.jpg" alt="">
                            </el-col>
                            <el-col :lg="20">
                                <el-row>
                                    <el-col :lg="12">
                                        <el-row><span class="userDetail"><router-link to="">波小米</router-link> (41级) 楼主 2019-03-04 06:02</span></el-row>
                                    </el-col>
                                    <el-col :lg="8" :offset="4" class="comment-operation">
                                        <span><router-link to="">我要赞赏</router-link>|<router-link to="">举报</router-link>|<router-link to="">只看此人</router-link>|<router-link to="">引用</router-link></span>
                                    </el-col>
                                </el-row>
                                <el-row class="comment-content">
                                    文体两开花，当之无愧。
                                </el-row>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row class="comment-detail">
                            <el-col :lg="2" class="comment-user-img">
                                <img src="https://i1.hoopchina.com.cn/user/default_small.jpg" alt="">
                            </el-col>
                            <el-col :lg="20">
                                <el-row>
                                    <el-col :lg="12">
                                        <el-row><span class="userDetail"><router-link to="">波小米</router-link> (41级) 楼主 2019-03-04 06:02</span></el-row>
                                    </el-col>
                                    <el-col :lg="8" :offset="4" class="comment-operation">
                                        <span><router-link to="">我要赞赏</router-link>|<router-link to="">举报</router-link>|<router-link to="">只看此人</router-link>|<router-link to="">引用</router-link></span>
                                    </el-col>
                                </el-row>
                                <el-row class="comment-content">
                                    文体两开花，当之无愧。
                                </el-row>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row class="comment-detail">
                            <el-col :lg="2" class="comment-user-img">
                                <img src="https://i1.hoopchina.com.cn/user/default_small.jpg" alt="">
                            </el-col>
                            <el-col :lg="20">
                                <el-row>
                                    <el-col :lg="12">
                                        <el-row><span class="userDetail"><router-link to="">波小米</router-link> (41级) 楼主 2019-03-04 06:02</span></el-row>
                                    </el-col>
                                    <el-col :lg="8" :offset="4" class="comment-operation">
                                        <span><router-link to="">我要赞赏</router-link>|<router-link to="">举报</router-link>|<router-link to="">只看此人</router-link>|<router-link to="">引用</router-link></span>
                                    </el-col>
                                </el-row>
                                <el-row class="comment-content">
                                    文体两开花，当之无愧。
                                </el-row>
                            </el-col>
                        </el-row>
                    </li>   
                </ul>
            </el-row>
            <el-row class="page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </el-row>
            <el-row class="editor">
                <vueEditor></vueEditor>
            </el-row>

        </el-col>
        <el-col :offset="2" :lg="6">
            <articleRecommend></articleRecommend>
        </el-col>
    </el-row>
</template>
<script>
import vueEditor from '@/components/vueEditor'
import articleRecommend from '@/components/articleRecommend'
export default {
    components:{
        vueEditor,
        articleRecommend
    }
}
</script>


<style lang="less" scoped>
    .articleDetail{
        border: 1px solid #aaaaaa;
        padding: 20px;
        .articleContent{
            .contentDetail{
                margin-top: 50px;
                border-top: 1px solid #aaaaaa;
                padding: 50px;
                background-color: #f0f3f5;
                font-size: 15px;
            }

            .userImg{
                img{
                    height: 45px;
                    width: 45px;
                }
            }
            .aticle-title{
                font-size: 15px;
            }
            .userDetail{
            font-size: 15px;
            color: #aaaaaa;
            }
        }
        .comment{
            margin-top: 50px;
            padding: 10px;
            border:1px solid #5994cb;
            background-color: #f0f3f5;
            .comment-title{
                border-bottom: 1px solid #aaaaaa;
            }
            .comment-detail{
                padding-top: 10px;
                .comment-user-img{
                    img{
                        height: 53px;
                        width: 53px;
                    }
                }
            }
            .comment-operation{
                font-size: 15px;
            }
            .comment-content{
                margin-top: 10px;
                font-size: 15px;
            }

            .comment-detail{
                padding-bottom: 20px;
                border-bottom: 1px solid #aaaaaa;
            }
        }
    }

    .editor{
        margin-top: 40px;
    }
    .page{
        margin-top: 20px;
    }

</style>

