<template>
  <div class="Time">
    <happy-scroll color="rgba(0,0,0,0.5)" size="0" class="">
        <div class="scoll">
      <el-timeline>
        <div v-for="(item, index) in TimeArray" :key="index">
          <el-timeline-item :timestamp="item.Time" placement="top">
            <el-card>
              <h4>
                {{ item.tittle }}
              </h4>
              <p>
                {{ item.content }}
              </p>
            </el-card>
          </el-timeline-item>
        </div>
      </el-timeline>
      </div>
    </happy-scroll>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      Time: "yy-hh-ss",
      TimeArray: [
        {
          Time: "yy-hh-ss",
          tittle: "添加功能",
          content: "內容",
        },
        {
          Time: "yy-hh-ss",
          tittle: "添加功能",
          content: "內容",
        },
        {
          Time: "yy-hh-ss",
          tittle: "添加功能",
          content: "內容",
        },
        {
          Time: "2019-01-01",
          tittle: "添加功能",
          content: "內容",
        },
      ],
    };
  },
};
</script>

<style>
.Time {
  width: 1200px;
  height: 500px;
  
}
.scoll{
    width: 1000px;
/* background: rgba(0, 0, 0, 0.2); */
}
</style>