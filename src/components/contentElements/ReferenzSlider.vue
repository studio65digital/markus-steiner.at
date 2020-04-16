<template>
	<div id="referenzSlider">
		<div class="infoSlides">
			<div v-for="item in referenz" :key="item.node.id">
				<div class="left-part">
					<span>{{item.node.customer}}</span>
					<h2>{{item.node.project}}</h2>
					<a :href="item.node.url" rel="noopnener noreferrer" target="_blank">Website besuchen</a>
				</div>
			</div>
		</div>
		<div class="imageSlides">
			<div v-for="item in referenz" :key="item.node.id">
				<g-image :src="item.node.mainimage"></g-image>
			</div>
		</div>
	</div>
</template>
<script >
export default {
	props: {
		referenz: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
</style>