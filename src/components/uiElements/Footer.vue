<template>
	<div class="layout">
		<nav id="footerNav" class="flex mx-auto container justify-between">
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/">Home</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/informationen/impressum">Impressum</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/informationen/datenschutz">Datenschutz</g-link>
			</div>
			<div class="navlink-wrap">
				<g-link class="nav__link" to="/informationen/partner">Partner & Freunde</g-link>
			</div>
		</nav>
		<!-- TODO: Refactor into Component
		TODO: Get Content from theme.json-->
		<div id="copyright" class="flex justify-between items-center">
			<p class="copyright-text">©2020 Markus Steiner – Alle Rechte vorbehalten</p>
			<a
				class="stagedive-link"
				href="https://www.stagedive.media"
				target="_blank"
				title="Mehr gibt's bei stagedive.media"
			>
				<img
					class="stagedive-logo"
					src="../../assets/images/stagedive.svg"
					alt="Mehr von mir gibt's bei stagedive.media"
				/>
			</a>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style lang="scss">
#footerNav {
	padding: 5.555vw 0 10.11vw 0;
}
.nav__link {
	font-weight: 800;
	font-size: 1.5vw;
	margin: 0 1vw;
	position: relative;
	display: inline-block;
}

.nav__link:after {
	content: "";
	background-color: theme("colors.primary");
	display: block;
	position: absolute;
	height: 0.6vw;
	left: -10px;
	right: 120%;
	bottom: 20%;
	z-index: -1;
	transition: all 0.4s cubic-bezier(1, 0.01, 0.35, 0.62);
}

.nav__link:hover:after {
	right: -10px;
}
#copyright {
	//border-top: 1px solid theme("colors.dark");
	margin: 0vw 5.555vw 2vw 5.555vw;
	//padding-top: 2vw;
	p {
		margin: 0;
	}
}
.stagedive-logo {
	max-width: 160px;
	height: auto;
}
.stagedive-link {
	opacity: 0.5;
	transition: all 0.5s;
}
.stagedive-link:hover {
	opacity: 1;
}
</style>
