<template>
	<div id="aboutMe">
		<div class="wrap container mx-auto" v-for="item in about" :key="item.node.id">
			<div class="leftAbout">
				<div class="toptext">
					<span class="pretext">{{item.node.pretitle}}</span>
					<span class="pretext">{{item.node.pretitle2}}</span>
				</div>
				<h3>{{item.node.myname}}</h3>
				<p v-html="item.node.kurzbeschreibung"></p>
			</div>

			<div class="rightAbout"></div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		about: {
			type: Array,
			required: true
		}
	}
};
</script>
<style></style>