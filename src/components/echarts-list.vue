<template>
  <div class="echarts-list" ref="echartGeo">
  </div>
</template>
<script>
import echarts from 'echarts';
export default {
  props: {
    option: {
      type: Object,
      defaults: () => {
        return {}
      }
    }
  },
  data() {
    return {
      myChart: {}
    }
  },
  mounted(){
    this.initEchartsFun(true);
  },
  methods: {
    initEchartsFun(flag = false) {
      this.myChart = echarts.init(this.$refs.echartGeo);
      this.myChart.setOption(this.option);
      if (flag) this.myChart.on('click', (params) => {
        this.$emit('my-click', params);
      })
    }
  },
  watch: {
    option() {
      this.initEchartsFun()
    }
  }
}
</script>
<style lang="scss">
.echarts-list {
  width: 100%;
  height: 350px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
