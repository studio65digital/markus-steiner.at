<template>
	<div class="layout">
		<sd-header></sd-header>
		<!-- <sd-nav-main></sd-nav-main> -->

		<transition name="fade" appear>
			<main>
				<!-- a wrapper for slot is needed -->
				<slot />
			</main>
		</transition>
		<sd-footer></sd-footer>
	</div>
</template>
<script>
import header from "../components/uiElements/Header.vue";
import footer from "../components/uiElements/Footer.vue";
// import navMain from "../components/uiElements/NavMain.vue";

export default {
	components: {
		"sd-header": header,
		"sd-footer": footer
		//"sd-nav-main": navMain
	}
};
</script>

<style lang="scss">
@font-face {
	font-family: "Merriweather";
	src: url("../assets/fonts/Merriweather-Light.eot");
	src: url("../assets/fonts/Merriweather-Light.eot?#iefix")
			format("embedded-opentype"),
		url("../assets/fonts/Merriweather-Light.woff2") format("woff2"),
		url("../assets/fonts/Merriweather-Light.woff") format("woff"),
		url("../assets/fonts/Merriweather-Light.ttf") format("truetype"),
		url("../assets/fonts/Merriweather-Light.svg#Merriweather-Light")
			format("svg");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Gilroy";
	src: url("../assets/fonts/Gilroy-ExtraBold.eot");
	src: url("../assets/fonts/Gilroy-ExtraBold.eot?#iefix")
			format("embedded-opentype"),
		url("../assets/fonts/Gilroy-ExtraBold.woff2") format("woff2"),
		url("../assets/fonts/Gilroy-ExtraBold.woff") format("woff"),
		url("../assets/fonts/Gilroy-ExtraBold.ttf") format("truetype"),
		url("../assets/fonts/Gilroy-ExtraBold.svg#Gilroy-ExtraBold")
			format("svg");
	font-weight: 800;
	font-style: normal;
}

@font-face {
	font-family: "Gilroy";
	src: url("../assets/fonts/Gilroy-Light.eot");
	src: url("../assets/fonts/Gilroy-Light.eot?#iefix")
			format("embedded-opentype"),
		url("../assets/fonts/Gilroy-Light.woff2") format("woff2"),
		url("../assets/fonts/Gilroy-Light.woff") format("woff"),
		url("../assets/fonts/Gilroy-Light.ttf") format("truetype"),
		url("../assets/fonts/Gilroy-Light.svg#Gilroy-Light") format("svg");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Gilroy";
	src: url("../assets/fonts/Gilroy-Bold.eot");
	src: url("../assets/fonts/Gilroy-Bold.eot?#iefix")
			format("embedded-opentype"),
		url("../assets/fonts/Gilroy-Bold.woff2") format("woff2"),
		url("../assets/fonts/Gilroy-Bold.woff") format("woff"),
		url("../assets/fonts/Gilroy-Bold.ttf") format("truetype"),
		url("../assets/fonts/Gilroy-Bold.svg#Gilroy-Bold") format("svg");
	font-weight: bold;
	font-style: normal;
}
.fade-enter-active {
	transition: opacity 0.7s;
}

.fade-enter {
	opacity: 0;
}
body {
	text-rendering: geometricPrecision;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: antialiased;
	color: theme("colors.dark");
	font-family: "Gilroy";
}
*::selection {
	background: rgba(237, 102, 99, 0.99);
	color: theme("colors.dark");
	opacity: 1;
}
#app {
	padding-top: 8.2vw;
}
h1,
h2,
h3 {
	font-family: "Gilroy";
	font-weight: 800;
}
h1 {
	line-height: 0.9;
}
h2 {
	font-size: 2.7vw;
	margin-bottom: 2vw;
	line-height: 1.1;
}
p,
.ctr {
	font-family: "Merriweather";
	font-size: 20px;
	line-height: 1.888;
	font-weight: 300;
	margin-bottom: 2vw;
	@media (min-width: 1800px) {
		font-size: 1vw;
	}
}
.ctr {
	color: theme("colors.primary");
	position: relative;
	display: inline-block;
}
.ctr:after {
	content: url("../assets/images/ctr-arrow.svg");
	max-width: 18px;
	display: inline-block;
	margin-left: 10px;
	position: relative;
}

.ctr:hover:after {
	animation: ctr-animation 2s infinite;
}
.mega-container {
	padding: 5.555vw;
}
.swiper-pagination-current {
	display: inline-block;
	min-width: 15px;
}
html.noscroll {
	overflow: hidden;
}
</style>
