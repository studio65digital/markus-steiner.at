<template>
	<div class="layout">
		<sd-header></sd-header>
		<!-- <sd-nav-main></sd-nav-main> -->
		<slot />
	</div>
</template>
<script>
import header from "../components/uiElements/Header.vue";
// import navMain from "../components/uiElements/NavMain.vue";

export default {
	components: {
		"sd-header": header
		//"sd-nav-main": navMain
	}
};
</script>

<style>
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
	font-family: "Merriweather";
	src: url("../assets/fonts/Merriweather-LightItalic.eot");
	src: url("../assets/fonts/Merriweather-LightItalic.eot?#iefix")
			format("embedded-opentype"),
		url("../assets/fonts/Merriweather-LightItalic.woff2")
			format("woff2"),
		url("../assets/fonts/Merriweather-LightItalic.woff") format("woff"),
		url("../assets/fonts/Merriweather-LightItalic.ttf")
			format("truetype"),
		url("../assets/fonts/Merriweather-LightItalic.svg#Merriweather-LightItalic")
			format("svg");
	font-weight: 300;
	font-style: italic;
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
body {
	text-rendering: geometricPrecision;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: antialiased;
	color: theme("colors.dark");
}
h1,
h2 {
	font-family: "Gilroy";
	font-weight: 800;
	line-height: 0.9;
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
</style>
