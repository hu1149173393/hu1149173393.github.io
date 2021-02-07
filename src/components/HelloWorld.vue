<template>
  <div class="hello">
    <div class="video">
      <h2>世事无奈人无奈，能说之时不想说，想说之时已是不能说。</h2>
    </div>
    <div class="cont">
      <happy-scroll color="rgba(0,0,0,0.5)" size="0">
        <div class="conLeft">
          <div v-for="(item,index) in contentArray" :key="index" class="LeftContent">
            <div>
              {{item.time}}
            </div>
            <h3 style="border-top:1px solid #E4E7ED;">{{item.Bar}}</h3>
            <div>
              {{item.content}}
            </div>
          </div>
        </div>
      </happy-scroll>

      <div class="conRight">
        <div class="meimg" :style="me"></div>
        <div style="margin:30px;line-height:25px;">
          <div>昵称：红茶</div>
          <div>码龄：1年的小菜鸡</div>
          <div>博客：hu1149173393</div>
          <div>地址：hu1149173393</div>
          <div>邮箱：18739318691@163.com</div>
          <div style="margin-top:10px;"><el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input"></el-input></div>
          <div style="margin-top:10px;">
            <h4 style="text-align:center;">好聽的話</h4>
            <div style="border:1px solid #303133;margin-top:10px; height:40px;line-height:40px;">隨機展示話語內容尚待完善</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      me:{
        backgroundImage: "url(" + require("../static/book.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      input:'',
      contentArray:[
        {
          Bar:'记录一下开张时刻',
          content:'等待數據庫搭建',
          time:'yy-hh-ss'
        },
      ],
      books:'javascript高级编程'
    }
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.hello {
  color: aliceblue;
}
.video {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  // border: 1px solid red;
}
.cont {
  width: 100%;
  height: 30vw;
  margin-top: 10px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .conLeft {
    width: 800px;
    // border: 1px solid red;
  }
  .conRight {
    width: 500px;
    // border: 1px solid wheat;

  }
}
.LeftContent{
  width: 90%;
  height: 15vw;
  margin-bottom: 10px;
  border: 1px solid wheat;
  line-height: 30px;
  margin-top: 30px;
  margin-left: 30px;
}
.meimg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  // border: 1px solid;
  margin: 0 auto;
}
</style>
