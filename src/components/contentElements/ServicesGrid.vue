<template>
  <div class="servicesGrid grid grid-cols-3 gap-12">
    <g-link
      :to="item.node.ctrlink"
      :class="item.node.background"
      class="card relative transition transition-all duration-300 ease-in-out"
      v-for="item in offer"
      :key="item.node.id"
    >
      <g-image class="backdrop" :src="item.node.backgroundimage" />
      <g-image class="icon mb-8" :src="item.node.icon" />
      <h2>{{item.node.offer}}</h2>
      <p v-html="item.node.bodytext"></p>
      <g-link class="ctr" :to="item.node.ctrlink">{{item.node.ctrtext}}</g-link>
    </g-link>
  </div>
</template>

<script >
export default {
  props: {
    offer: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 3vw;
  * {
    color: white;
  }
  bottom: 0;
  position: relative;
  overflow: hidden;
  background-color: theme("colors.dark");
  h2,
  p,
  a,
  .icon {
    position: relative;
    z-index: 2;
  }
}
.backdrop {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 100%;
  min-width: 100%;
  opacity: 0;
  transition: opacity 0.6s, transform 17s;
}
.card:hover {
  //background-color: theme("colors.secondary");
  box-shadow: 0 20px 40px -12px #828282;
  transform: translateY(-10px);
  .backdrop {
    opacity: 0.3;
    transform: scale(1.25);
  }
}

.icon {
  width: 3vw;
  height: auto;
  path {
    fill: red;
  }
}
.ctr {
  margin-bottom: 0;
}
.ctr:after {
  content: url("../../assets/images/ctr-arrow-red.svg");
}
</style>



