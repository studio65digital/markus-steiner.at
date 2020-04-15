<template>
	<div class="servicesGrid grid grid-cols-3 gap-12">
		<g-link
			:to="item.node.ctrlink"
			:class="item.node.background"
			class="card relative transition transition-all duration-300 ease-in-out"
			v-for="item in offer"
			:key="item.node.id"
		>
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
}
.card:hover {
	background-color: theme("colors.secondary");
	box-shadow: 0 15px 30px -12px #333;
	transform: translateY(-10px);
}
h2 {
	font-size: 2.7vw;
	margin-bottom: 2vw;
	line-height: 1;
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