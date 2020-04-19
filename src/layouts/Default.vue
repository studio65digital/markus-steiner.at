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

/////////

.imageSlides {
	width: 60vw;
	overflow: hidden;
	.swiper-container {
		overflow: visible;
		width: 50vw;
		margin-left: 0;
	}
	.swiper-slide {
		width: 50vw;
	}
}
.infoSlides {
	padding: 0 8.555vw 0 5.555vw;
	h2,
	p,
	span,
	a {
		color: white;
	}

	.customer {
		font-family: "Gilroy";
		font-weight: 700;
		opacity: 0.5;
		font-size: 0.9vw;
		padding-left: 7vw;
	}
	h2 {
		margin-top: 3vw;
		margin-bottom: 3vw;
		font-size: 2.7vw;
	}
	.ext-link {
		font-family: "Gilroy";
		font-weight: 700;
		line-height: 3vw;
		svg {
			display: inline;
			margin-right: 6px;
			position: relative;
			bottom: 2px;
		}
	}
}

.slider-backdrop {
	padding: 5.555vw 0;
	margin: 5.555vw 0;
}
.slider-backdrop:before {
	content: " ";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 40vw;
	background: theme("colors.dark");
	z-index: -1;
}
.swiper-pagination-fraction {
	display: inline-block;
	top: 2px;
	bottom: auto;
	color: white;
	font-family: "Gilroy";
	font-weight: 300;
	font-size: 0.9vw;
	text-align: left;
	font-weight: 700;
	width: 7vw;
	background: theme("colors.dark");
}

.swiper-pagination-fraction:after {
	content: "";
	height: 1px;
	background: theme("colors.primary");
	width: 3vw;
	display: inline-block;
	margin-left: 1vw;
	position: relative;
	bottom: 0.4vw;
}
.swiper-button-next,
.swiper-button-prev {
	bottom: 0;
	top: auto;
}

.swiper-button-next:after,
.swiper-button-prev:after {
	content: "";
}
.swiper-next {
	path {
		fill: theme("colors.primary");
		transition: all 0.3s ease-in-out;
	}
}
.swiper-button-prev {
	right: 5vw;
	left: auto;
	transform: rotate(180deg);
	path {
		fill: white;
	}
}
.swiper-button-next {
	border: 1px solid theme("colors.primary");
}
.swiper-button-next,
.swiper-button-prev {
	width: 3vw;
	height: 3vw;

	border-radius: 50%;
	background: theme("colors.dark");
	transition: all 0.3s ease-in-out;
}
.swiper-button-next:hover {
	background: theme("colors.primary");
	border-color: theme("colors.primary");
	path {
		fill: theme("colors.dark");
	}
}
.swiper-button-next:focus,
.swiper-button-prev:focus {
	outline: none;
	box-shadow: none;
}
.swiper-slide {
	.project-headline,
	.ext-link,
	.customer {
		position: relative;
		transition: all 1s;
	}
}

.swiper-slide-next {
	.customer {
		opacity: 0;
		left: 1rem;
	}
	.project-headline {
		opacity: 0;
		left: 3rem;
	}
	.ext-link {
		opacity: 0;
		left: 2rem;
	}
}
.swiper-slide-active {
	.customer {
		opacity: 1;
		left: 0rem;
		transition-delay: 1.1s;
	}
	.project-headline {
		opacity: 1;
		transition-delay: 0.5s;
		left: 0rem;
	}
	.ext-link {
		opacity: 1;
		left: 0rem;
		transition-delay: 0.8s;
	}
}
.swiper-slide-prev {
	.customer {
		opacity: 0;
		left: 1rem;
	}
	.project-headline {
		opacity: 0;
		left: -5rem;
	}
	.ext-link {
		opacity: 0;
		left: 2rem;
	}
}
.imageSlides {
	.swiper-slide {
		position: relative;
		background: theme("colors.dark");
		img {
			transition: opacity 0.5s;
		}
	}

	.techstack {
		position: absolute;
		bottom: 0;
		background: #f3f3f3;
		padding: 1vw;
		transition: opacity 0.5s;

		.stack-item {
			transition: opacity 0.5s;
			width: 25px;
			height: 25px;
			opacity: 0.5;
			margin-right: 20px;
			display: inline-block;
		}
	}

	.swiper-slide-next {
		img {
			opacity: 0.2;
		}
		.stack-item,
		.techstack {
			opacity: 0;
		}
	}
	.swiper-slide-active {
		img {
			opacity: 1;
		}
		.techstack {
			opacity: 1;
			transition-delay: 0.6s;
		}
		.stack-item {
			opacity: 0.5;
			transition-delay: 0.8s;
		}
		.stack-item:nth-of-type(1) {
			transition-delay: 0.9s;
		}
		.stack-item:nth-of-type(2) {
			transition-delay: 1s;
		}
		.stack-item:nth-of-type(3) {
			transition-delay: 1.1s;
		}
		.stack-item:nth-of-type(4) {
			transition-delay: 1.2s;
		}
		.stack-item:nth-of-type(5) {
			transition-delay: 1.3s;
		}
		.stack-item:nth-of-type(6) {
			transition-delay: 1.4s;
		}
		.stack-item:nth-of-type(7) {
			transition-delay: 1.5s;
		}
	}
	.swiper-slide-prev {
		img {
			opacity: 0.2;
		}
		.stack-item,
		.techstack {
			opacity: 0;
		}
	}

	/////// Techstack

	.angular:before {
		content: url(../../assets/images/techstack/angular.svg);
	}
	.bootstrap:before {
		content: url(../../assets/images/techstack/bootstrap.svg);
	}
	.craftcms:before {
		content: url(../../assets/images/techstack/craftcms.svg);
	}
	.css3:before {
		content: url(../../assets/images/techstack/css3.svg);
	}
	.drupal:before {
		content: url(../../assets/images/techstack/drupal.svg);
	}
	.gatsby:before {
		content: url(../../assets/images/techstack/gatsby.svg);
	}
	.graphql:before {
		content: url(../../assets/images/techstack/graphql.svg);
	}
	.gsap:before {
		content: url(../../assets/images/techstack/gsap.svg);
	}
	.html5:before {
		content: url(../../assets/images/techstack/html5.svg);
	}
	.angular:before {
		content: url(../../assets/images/techstack/angular.svg);
	}
	.jquery:before {
		content: url(../../assets/images/techstack/jquery.svg);
	}
	.js:before {
		content: url(../../assets/images/techstack/js.svg);
	}
	.react:before {
		content: url(../../assets/images/techstack/react.svg);
	}
	.sass:before {
		content: url(../../assets/images/techstack/sass.svg);
	}
	.shopware:before {
		content: url(../../assets/images/techstack/shopware.svg);
	}
	.tailwindcss:before {
		content: url(../../assets/images/techstack/tailwindcss.svg);
	}
	.typo3:before {
		content: url(../../assets/images/techstack/typo3.svg);
	}
	.vue:before {
		content: url(../../assets/images/techstack/vue.svg);
	}
	.vuetify:before {
		content: url(../../assets/images/techstack/vuetify.svg);
	}
	.woo:before {
		content: url(../../assets/images/techstack/woo.svg);
	}
	.wordpress:before {
		content: url(../../assets/images/techstack/wordpress.svg);
	}
	.sketch:before {
		content: url(../../assets/images/techstack/sketch.svg);
	}
	.shopify:before {
		content: url(../../assets/images/techstack/shopify.svg);
	}
	.forestry:before {
		content: url(../../assets/images/techstack/shopify.svg);
	}
}
</style>
