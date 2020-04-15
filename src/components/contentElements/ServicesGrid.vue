<template>
	<div class="servicesGrid grid grid-cols-3 gap-12">
		<div class="card" v-for="item in offer" :key="item.node.id">
			<h2>{{item.node.offer}}</h2>
		</div>
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
}
h2 {
	font-size: 3vw;
	margin-bottom: 2vw;
}
</style>