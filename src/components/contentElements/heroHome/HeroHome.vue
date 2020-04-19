<template>
	<div id="heroHome">
		<div class v-for="item in hero" :key="item.node.id">
			<div class="hero-item flex items-center justify-between relative">
				<div class="heroTextWrapper w-4/6 relative z-10">
					<div class="arrow-hl relative">
						<h1 class="heroHeadline">{{item.node.headline}}</h1>
						<sd-headline-arrow></sd-headline-arrow>
						<div class="bracket-left absolute">
							<sd-bracket-left></sd-bracket-left>
						</div>
						<div class="bracket-right absolute">
							<sd-bracket-right></sd-bracket-right>
						</div>
					</div>
					<div class="heroText mt-20 w-6/12 ml-40">
						<p v-html="item.node.bodytext"></p>
						<g-link :to="item.node.ctrlink" class="ctr block heroCtr">Mehr erfahren</g-link>
					</div>
				</div>
				<div class="heroImage w-2/6">
					<g-image :src="item.node.heroimage" width="1200" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import headlineArrow from "~/components/contentElements/heroHome/HeadlineArrow.vue";
import bracketLeft from "~/components/contentElements/heroHome/BracketLeft.vue";
import bracketRight from "~/components/contentElements/heroHome/BracketRight.vue";
export default {
	props: {
		hero: {
			type: Array,
			required: true
		}
	},
	components: {
		"sd-headline-arrow": headlineArrow,
		"sd-bracket-left": bracketLeft,
		"sd-bracket-right": bracketRight
	}
};
</script>

<style lang="scss" scoped>
#heroHome {
	padding: 0 0 5.555vw 5.555vw;
}

h1 {
	font-size: 10vw;
}
.heroImage {
	position: relative;
	right: 5.555vw;
	img {
		min-width: 110%;
		left: -10%;
		display: block;
		position: relative;
	}
}
.arrow-hl:after {
	position: absolute;
	background-color: theme("colors.dark");
	height: 3vw;
	width: 1.58vw;
	content: "";
	left: 26.89vw;
	bottom: 3vw;
}
.bracket-left {
	display: none;
	left: -3.4vw;
	top: 3.35vw;
	svg {
		width: 3vw;
		height: auto;
	}
}
.bracket-right {
	right: 14.5vw;
	top: 2.3vw;
	svg {
		width: 6vw;
		height: auto;
	}
}
</style>
