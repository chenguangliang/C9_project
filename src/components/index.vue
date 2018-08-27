<template>
  <div  class="index">
    <div style="width: 100%;background:rgb(84, 92, 100);;"><header_top></header_top></div>
    <el-container class="main">
      <el-aside width="200px"><nav_left></nav_left></el-aside>
      <el-container>
        <el-main>
          <!--轮播图 start-->
          <div class="block">
            <el-carousel height="450px">
              <el-carousel-item v-for="(item,index) in mallBanner" :key="index">
                <img :src="imgUrl_head + item.bannerUrl" alt="" style="width: 100%;">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--轮播图 end-->
          <!--卡片 start-->
          <el-row class="mar_t20">
            <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img src="http://img.printhome.com/imgs/2015/11/26/f70e39d9-249c-4ed7-98c4-8339bad109bd.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <!--<time class="time">{{currentDate}}</time>-->
                    <el-button type="primary" round>主要按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>

          </el-row>
          <!--卡片 end-->
          <!--分页 start-->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            class="mar_t30"
            @prev-click="prevClick()"
            @current-change="currentPage($event)"
            @next-click="nextClick()"
          >
          </el-pagination>
          <!--分页 start-->
        </el-main>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
import header_top from './header_top.vue'
import nav_left from './nav_left.vue'
export default {
  name: 'index',
  data () {
    return {
      mallBanner: [],
      currentDate: new Date()
    }
  },
  components:{header_top,nav_left},
  beforeMount: function () {
    let temp=this;
    //首页轮播图
    temp.axios.get("/mallBanner").then( (response) => {
      response.data ? temp.mallBanner = response.data:'';
    }).catch( (err) => {
      console.log(err);
    })
  },
  methods:{
    prevClick(){
      alert('上一页');
    },
    currentPage($event){
        alert('第'+ $event +'页')
    },
    nextClick(){
      alert('下一页');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
  .index{
    .main{
      width:1200px;margin: 0 auto;
    }
    .el-header, .el-footer {
      background-color: #3a3e42;
      color: #333;
      text-align: center;
      line-height: 60px;
      padding: 0;
    }

    .el-aside {
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #fff;
      color: #333;
      text-align: center;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
    /*轮播图*/
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .el-carousel__arrow{
      background-color: rgba(88, 88, 88, 1);
    }
    .el-carousel__button{
      background-color: rgba(88, 88, 88, 1);
    }
    /*卡片*/
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  }

</style>
