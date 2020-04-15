<template>
	<div id="heroHome" class="flex items-center justify-between relative">
		<div class="heroTextWrapper w-4/6 relative z-10">
			<div class="arrow-hl relative">
				<h1 class="heroHeadline">Frontend loves Design</h1>
				<sd-headline-arrow></sd-headline-arrow>
				<div class="bracket-left absolute">
					<sd-bracket-left></sd-bracket-left>
				</div>
				<div class="bracket-right absolute">
					<sd-bracket-right></sd-bracket-right>
				</div>
			</div>
			<div class="heroText mt-20 w-6/12 ml-40">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit. Aenean commodo ligula eget dolor. Aenean massa.
					Cum sociis natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Donec quam felis,
					ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim.
				</p>
				<g-link to="/kontakt" class="ctr block heroCtr">Mehr erfahren</g-link>
			</div>
		</div>
		<div class="heroImage w-1/3">
			<g-image src="~/assets/images/hero-image.jpg" width="1200" />
		</div>
	</div>
</template>

<script>
import headlineArrow from "~/components/contentElements/heroHome/HeadlineArrow.vue";
import bracketLeft from "~/components/contentElements/heroHome/BracketLeft.vue";
import bracketRight from "~/components/contentElements/heroHome/BracketRight.vue";
export default {
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
	right: 5.555vw;
	top: 2rem;
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
