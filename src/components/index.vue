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
          <el-row :gutter="20">
            <el-col class="mar_t20" :span="8" v-for="(o, index) in 6" :key="o" >
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
          <div class="block mar_t50">
            <span class="demonstration">完整功能</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="currentPage($event)"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
          <!--分页 end-->
          <!--动画 start-->
          <template>
            <div  class="mar_t30" style="text-align: left">
              <el-button @click="show3 = !show3">Click Me</el-button>

              <div style="margin-top: 20px; height: 200px;">
                <el-collapse-transition>
                  <div v-show="show3">
                    <div class="transition-box">el-collapse-transition</div>
                    <div class="transition-box">el-collapse-transition</div>
                  </div>
                </el-collapse-transition>
              </div>
            </div>
          </template>
          <!--动画 end-->
          <!--input start-->
          <div  class="mar_t30">
            <el-input placeholder="请输入内容" v-model="input3">
              <template slot="prepend">Http://</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input4">
              <template slot="append">.com</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" size="mini">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <!--input end-->
          <p class="font_col mar_t50">sdfasdfa</p>
          <!--开关-->
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          <img src="http://192.168.1.121:8080/auth-web/register/acquire?uuid=0226"></img>
          <!--滑动条-->
          <template>
            <div class="block">
              <span class="demonstration">默认</span>
              <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">自定义初始值</span>
              <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">隐藏 Tooltip</span>
              <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">格式化 Tooltip</span>
              <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">禁用</span>
              <el-slider v-model="value5" disabled></el-slider>
            </div>
          </template>

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
      currentDate: new Date(),
      show3: true,
      value1: true,
      value2: true,
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    }
  },
  components:{header_top,nav_left},
  beforeMount: function () {
    let temp=this;
    //首页轮播图
//    temp.axios.get("/mallBanner").then( (response) => {
//      response.data ? temp.mallBanner = response.data:'';
//    }).catch( (err) => {
//      console.log(err);
//    })
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
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409EFF;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
    /*input*/
    .el-select .el-input {
      width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }

  }

</style>
