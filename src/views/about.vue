<template>
  <div class="aboutMe">
    <h2 style="width: 100%; text-align: center">我的簡歷</h2>
    <div class="jian">
      <div v-for="(me, index) in meArray" :key="index" class="me">
        <h3 style="">我的經歷</h3>
        <p>姓名：{{ me.name }}</p>
        <p>性別：{{ me.sex }}</p>
        <p>學歷：{{ me.school }}</p>
        <p>工作時間：{{ me.workTime }}</p>
        <p>出生年月：{{ me.boirthy }}</p>
        <p>郵箱：{{ me.com }}</p>
        <p>csdn:{{ me.csdn }}</p>
        <p>
          github： <el-link>{{ me.git }}</el-link>
        </p>
      </div>
      <div class="aboutRight">
        <div
          v-for="(work, index) in workArray"
          :key="index"
          style="margin-bottom: 20px"
        >
          <h3>公司：{{ work.name }}</h3>
          <p>時間：{{ work.time }}</p>
          <p>職位: {{ work.post }}</p>
          <p>技術：{{ work.science }}</p>
          <p>內容：{{ work.jobDuties }}</p>
        </div>
      </div>
      
        <div class="aboutBottm">
            <happy-scroll color="rgba(0,0,0,0.5)" size="0" class="">
                <div class="ddd">
          <div
            v-for="(pe, index) in ProjectExperience"
            :key="index"
            style="
              width: 280px;
              margin-right: 10px;
              margin-bottom: 10px;
              margin-top: 10px;
            "
          >
            <h4>{{ pe.homepage }}</h4>
            <p>所用技術:{{ pe.science }}</p>
            <p>
              項目展示: <el-link>{{ pe.dizhi }}</el-link>
            </p>
          </div>
          </div>
                </happy-scroll>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
  data() {
    return {
      meArray: [
        {
          name: "胡宗迪",
          sex: "男",
          school: "本科",
          boirthy: "1995-06-10",
          workTime: "2019-03-至今",
          com: "18739318691@163.com",
          git: "https://github.com/hu1149173393/hu1149173393.github.io",
          csdn: "hu1149173393",
        },
      ],
      workArray: [
        {
          name: "文谷科技",
          time: "2020.11-2021.2",
          post: "前端開發",
          science: "vue",
          jobDuties: "更新迭代，維護。",
        },
        {
          name: "高新鸿云",
          time: "2019.05-2020.09",
          post: "前端開發",
          science: "原生js，react，微信小程序，vue",
          jobDuties: "開發公司分配項目",
        },
      ],
      EducationExperience: [
        {
          school: "中原工學院信息商務學院",
          time: "2017-2019",
          RecordOfFormalSchooling: "本科",
          major: "機械設計製造及其自動化",
        },
        {
          school: "黃河水利職業技術學院",
          time: "2014-2017",
          RecordOfFormalSchooling: "專科",
          major: "機械設計製造及其自動化",
        },
      ],
      ProjectExperience: [
        {
          homepage: "文谷官網",
          science: "vue+axios+element",
          dizhi: "https://www.wingoht.com",
        },
        {
          homepage: "管理後台",
          science: "vue+axios+element",
          dizhi: "",
        },
        {
          homepage: "依雲",
          science: "vue+axios+element",
          dizhi: "",
        },
        {
          homepage: "封裝公司插件",
          science: "vue",
          dizhi: "",
        },
        {
          homepage: "地圖插件",
          science: "vue+axios+高德API",
        }
      ],
    };
  },
};
</script>

<style>
.about {
  width: 1200px;
}
.jian {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.me {
  width: 700px;

}
.aboutRight {
  width: 400px;

}
.aboutBottm {
  width: 700px;
  height: 230px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
.ddd{
      width: 700px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>