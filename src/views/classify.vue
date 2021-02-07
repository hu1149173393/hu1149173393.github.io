<template>
  <div class="classify">
    <div>
      <div class="fyLeft">
        <happy-scroll color="rgba(0,0,0,0.5)" size="0">
          <h3 style="text-align: center; width: 550px">vue</h3>
          <div
            style=" height: 80px; margin-bottom: 20px; padding-left:20px;"
            v-for="(vueIteam,vv) in vueArray"
            :key="vv"
          >
            <h3>
              {{ vueIteam.tittle }}
            </h3>
            <p>
              {{ vueIteam.content }}
            </p>
          </div>
        </happy-scroll>
      </div>
    </div>
    <div>
      <div class="fyRight">
        <happy-scroll color="rgba(0,0,0,0.5)" size="0">
          <h3 style="text-align: center; width: 550px">react</h3>
                    <div
            style=" height: 80px; margin-bottom: 20px;padding-left:20px;"
            v-for="(vueIteam,vv) in reactArray"
            :key="vv"
          >
            <h3>
              {{ vueIteam.tittle }}
            </h3>
            <p>
              {{ vueIteam.content }}
            </p>
          </div>
        </happy-scroll>
      </div>
    </div>
    <div>
      <div class="fyBottomLeft">
        <happy-scroll color="rgba(0,0,0,0.5)" size="0">
          <h3 style="text-align: center; width: 550px">js</h3>
                    <div
            style=" height: 80px; margin-bottom: 20px;padding-left:20px;"
            v-for="(vueIteam,vv) in jsArray"
            :key="vv"
          >
            <h3>
              {{ vueIteam.tittle }}
            </h3>
            <p>
              {{ vueIteam.content }}
            </p>
          </div>
        </happy-scroll>
      </div>
    </div>
    <div>
      <div class="fyBottomRight">
        <happy-scroll color="rgba(0,0,0,0.5)" size="0">
          <h3 style="text-align: center; width: 550px">node</h3>
                    <div
            style=" height: 80px; margin-bottom: 20px;padding-left:20px;"
            v-for="(vueIteam,vv) in nodeArray"
            :key="vv"
          >
            <h3>
              {{ vueIteam.tittle }}
            </h3>
            <p>
              {{ vueIteam.content }}
            </p>
          </div>
        </happy-scroll>
      </div>
    </div>
    <div class="bottomB">歡迎造訪小屋</div>
  </div>
</template>

<script>
export default {
  name: "classify",
  data() {
    return {
      vueArray: [
        {
          tittle: "标题",
          content: "内容",
        },
      ],
      reactArray: [
        {
          tittle: "标题",
          content: "内容",
        },
      ],
      jsArray: [
        {
          tittle: "标题",
          content: "内容",
        },
      ],
      nodeArray: [
        {
          tittle: "标题",
          content: "内容",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.classify {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* border: 1px solid; */
  height: 500px;
}
.fyLeft,
.fyRight,
.fyBottomLeft,
.fyBottomRight {
  width: 550px;
  height: 200px;
  /* border: 1px solid red; */
}
.bottomB{
    width: 100%;
    text-align: center;
}
</style>