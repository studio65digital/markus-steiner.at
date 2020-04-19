<template>
	<div id="aboutMe">
		<div class="wrap container mx-auto flex items-center" v-for="item in about" :key="item.node.id">
			<div class="leftAbout w-6/12">
				<div class="toptext">
					<span class="pretext">{{item.node.pretitle}}</span>
					<span class="pretext2">{{item.node.pretitle2}}</span>
				</div>
				<h3>{{item.node.myname}}</h3>
				<p v-html="item.node.kurzbeschreibung"></p>
				<g-link class="ctr" :to="item.node.slug">Mehr über mich</g-link>
			</div>

			<div class="rightAbout relative w-6/12">
				<g-image class="portrait mx-auto" width="568" :src="item.node.portrait"></g-image>
			</div>
		</div>
		<sd-full-stack></sd-full-stack>
	</div>
</template>
<script>
import fullstack from "~/components/contentElements/aboutMe/Fullstack.vue";
export default {
	props: {
		about: {
			type: Array,
			required: true
		}
	},
	components: {
		"sd-full-stack": fullstack
	}
};
</script>
<style scoped>
#aboutMe {
	padding-top: 5.555vw;
	padding-bottom: 5.555vw;
}
.pretext,
.pretext2 {
	font-size: 0.9vw;
}
.pretext {
	font-weight: 700;
}
.pretext:after {
	content: "";
	height: 1px;
	background: theme("colors.primary");
	width: 3vw;
	display: inline-block;
	margin-left: 1vw;
	position: relative;
	bottom: 0.4vw;
	margin-right: 1vw;
}

h3 {
	font-weight: 800;
	font-size: 6.5vw;
	line-height: 0.9;
	margin-bottom: 1.5vw;
	margin-top: 1.5vw;
}
.portrait {
	max-width: 16vw;
}
.rightAbout {
	overflow: visible;
}
.rightAbout:before {
	content: "";
	background: #f3f4f4;
	position: absolute;
	top: 4vw;
	right: 0;
	bottom: 5vw;
	left: -11vw;
	z-index: -1;
}
</style>