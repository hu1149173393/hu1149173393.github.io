<template>
  <div class="navionBar">
    <div>
      <h3 class="tea">红茶的博客</h3>
    </div>
    <div></div>
    <div
      class="Otherbar"
      v-for="(item, index) in bararray"
      :key="index"
      @click="jump(index)"
    >
      <i :class="item.icon"></i> &nbsp;&nbsp; &nbsp;&nbsp;
      <span>{{ item.name }}</span>
    </div>
    <el-drawer title="歡迎造訪" :visible.sync="drawer" :with-header="false">
      <h3 style="color: black; margin-left: 20px">鏈接地址</h3>
      <div style="color: black; margin-left: 20px">
        小破站：<el-link href="https://www.bilibili.com/" type="primary">{{
          pozhan
        }}</el-link>
      </div>
      <div style="color: black; margin-left: 20px">
        CSDN：<el-link href="https://www.bilibili.com/" type="primary">{{
          CSDN
        }}</el-link>
      </div>
      <div style="color: black; margin-left: 20px">
        vue：<el-link href="https://www.bilibili.com/" type="primary">{{
          vuea
        }}</el-link>
      </div>
      <div style="color: black; margin-left: 20px">
        react：<el-link href="https://www.bilibili.com/" type="primary">{{
          reacta
        }}</el-link>
      </div>
      <div style="color: black; margin-left: 20px">
        github：<el-link href="https://www.bilibili.com/" type="primary">{{
          git
        }}</el-link>
      </div>
      <div style="color: black; margin-left: 20px">
        MDN：<el-link
          href="https://developer.mozilla.org/zh-CN/"
          type="primary"
          >{{ MDN }}</el-link
        >
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "NavionBar",
  data() {
    return {
      bararray: [
        {
          name: "首页",
          icon: "el-icon-office-building",
        },
        {
          name: "分类",
          icon: "el-icon-paperclip",
        },
        {
          name: "时间",
          icon: "el-icon-date",
        },
        {
          name: "关于",
          icon: "el-icon-s-custom",
        },
        {
          name: "友链",
          icon: "el-icon-share",
        },
        {
          name: "更多",
          icon: "el-icon-s-grid",
        },
        {
          name: "搜索",
          icon: "el-icon-search",
        },
      ],
      drawer: false,
      pozhan: "https://www.bilibili.com/",
      git: "https://github.com/",
      CSDN: "https://www.csdn.net/",
      vuea: "https://cn.vuejs.org/",
      reacta: "https://react.docschina.org/",
      MDN: "https://developer.mozilla.org/zh-CN/",
    };
  },
  methods: {
    jump(index) {
      console.log(index);
      if (index == 0) {
        this.$router.push({
          path: "/Home",
        });
      }
      if (index == 1) {
        this.$router.push({
          path: "/fy",
        });
      }
      if (index == 2) {
        this.$router.push({
          path: "/time",
        });
      }
      if (index == 3) {
        this.$router.push({
          path: "/aboutMe",
        });
      }
      if (index == 4) {
        this.drawer = true;
      }
      if (index == 5) {
        this.$alert("此功能還沒有完善");
      }
      if (index == 6) {
        this.$prompt("请输入搜索內容", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        })
          .then(({ value }) => {
            this.$message({
              type: "success",
              message: "你搜索內容沒有搜索到: " + value,
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消输入",
            });
          });
      }
    },
  },
};
</script>

<style lang="less">
.navionBar {
  border: 1px solid wheat;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  line-height: 70px;
  color: #ffffff;
}
.tea {
  width: 100px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 13px;
}
.tea:hover {
  border-bottom: 1px solid;
}
.Otherbar {
  width: 80px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 13px;
}
.Otherbar:hover {
  border-bottom: 1px solid;
}
</style>