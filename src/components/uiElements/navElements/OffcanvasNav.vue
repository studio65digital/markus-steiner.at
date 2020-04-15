<template>
	<div class="nav fixed w-full bg-secondary inset-0 z-40 flex items-center">
		<div class="left-nav w-3/5">
			<div class="left-content text-white w-1/2 mx-auto">
				<p>
					Lorem ipsum dolor sit amet,
					consectetuer adipiscing elit.
					Aenean commodo ligula eget
					dolor. Aenean massa.
				</p>
				<sd-social-media></sd-social-media>
			</div>
		</div>
		<nav class="w-2/5">
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/">Home</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/about">Über mich</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/leistungen">Leistungen</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/referenzen">Referenzen</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/kontakt">Kontakt</g-link>
			</div>
		</nav>
	</div>
</template>
<script>
import socialMedia from "~/components/uiElements/navElements/SocialMedia.vue";
export default {
	components: {
		"sd-social-media": socialMedia
	}
};
</script>
<style scoped>
nav a {
	color: white;
	font-size: 3.4vw;
	font-family: "Gilroy";
	font-weight: 800;
	position: relative;
	line-height: 1;
	padding: 1vw 0;
	display: inline-block;
}
nav a:after {
	content: "";
	background-color: theme("colors.primary");
	display: block;
	position: absolute;
	height: 1vw;
	left: -10px;
	right: 110%;
	bottom: 20%;

	z-index: -1;
	transition: all 0.4s cubic-bezier(1, 0.01, 0.35, 0.62);
}
nav a:hover:after,
a.active--exact:after {
	right: -10px;
}
.left-nav {
	font-family: "Merriweather";
	font-weight: 300;
	font-size: 1vw;
}
</style>