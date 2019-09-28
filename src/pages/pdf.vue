<template>
  <div>
    <fixedNav></fixedNav>
    <pdf-preview :url="pdfUrl"></pdf-preview>
  </div>
</template>
<script>
// import { getParams } from 'comp/util/constants';
import fixedNav from 'comp/fixedNav.vue';
import pdfPreview from 'comp/pdfPreview.vue';
export default {
  components: {
    fixedNav, pdfPreview
  },
  data() {
    return {
      pdfUrl:'../../src/static/doc/test.pdf',
    };
  },
  mounted() {
    // this.pdfUrl = getParams("pdfUrl");
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
  
</style>

