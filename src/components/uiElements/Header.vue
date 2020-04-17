<template>
	<header id="nav" class="flex flex-row justify-between items-center">
		<!-- Logos (Std and Invers) -->
		<g-link to="/" class="relative z-50 logo-wrapper block">
			<transition name="fade">
				<div v-if="!this.show">
					<sd-logo-std></sd-logo-std>
				</div>
			</transition>
			<transition name="fade">
				<div id="logo-inv" v-if="this.show" class="logo-white">
					<sd-logo-inv></sd-logo-inv>
				</div>
			</transition>
		</g-link>
		<!-- Navigation -->
		<div id="navigation">
			<div class="actions relative z-50">
				<!-- Heartburger slides in Nav -->
				<transition name="fade">
					<div v-if="!this.show" class="navtoggle absolute top-0 left-0" @click="toggleNav()">
						<sd-heart-burger></sd-heart-burger>
					</div>
				</transition>
				<!-- Heartburger slides in Nav -->
				<transition name="fade">
					<div class="closer absolute top-0 left-0" v-if="this.show" @click="toggleNav()">
						<sd-close-arrow></sd-close-arrow>
					</div>
				</transition>
			</div>

			<transition name="slide-fade">
				<div v-show="show" class="fixed w-full inset-0 z-40">
					<sd-offcanvas-nav></sd-offcanvas-nav>
				</div>
			</transition>
		</div>
	</header>
</template>
<script>
import offcanvasNav from "~/components/uiElements/navElements/OffcanvasNav.vue";
import heartBurger from "~/components/uiElements/navElements/HeartBurger.vue";
import logoStd from "~/components/uiElements/navElements/LogoStd.vue";
import logoInv from "~/components/uiElements/navElements/LogoInv.vue";
import closeArrow from "~/components/uiElements/navElements/CloseArrow.vue";

export default {
	components: {
		"sd-offcanvas-nav": offcanvasNav,
		"sd-logo-std": logoStd,
		"sd-logo-inv": logoInv,
		"sd-heart-burger": heartBurger,
		"sd-close-arrow": closeArrow
		//"sd-nav-main": navMain
	},
	data() {
		return {
			show: false,
			noscroll: false
		};
	},
	methods: {
		toggleNav(e) {
			this.show = !this.show;
			this.noscroll = !this.noscroll;
		}
	},
	mounted() {
		window.document.onscroll = () => {
			let navBar = document.getElementById("nav");
			if (window.scrollY > 0) {
				navBar.classList.add("sticky");
			} else {
				navBar.classList.remove("sticky");
			}
		};
	},
	watch: {
		noscroll() {
			document.documentElement.classList.toggle("noscroll");
		}
	},
	beforeMount() {
		document.documentElement.classList.remove("noscroll");
	}
};
</script>

<style scoped>
header {
	padding-left: 5.555vw;
	padding-right: 5.555vw;
	position: fixed;
	top: 0;
	width: 100%;
	transition: all 0.5s;
	z-index: 9999;
	padding-top: 3vw;
	padding-bottom: 3vw;
}
header.sticky {
	background-color: white;
	padding-top: 1vw;
	padding-bottom: 1vw;
	border-bottom: 1px solid #eaeaea;
}

.slide-fade-enter-active {
	transition: all 0.6s cubic-bezier(1, 0.01, 0.35, 0.62);
}
.slide-fade-leave-active {
	transition: all 0.6s cubic-bezier(1, 0.01, 0.35, 0.62);
}
.slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
	transition-delay: 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.logo-wrapper {
	width: 180px;
	height: 20px;
}

.actions {
	height: 45px;
	width: 40px;
}

.closer,
.navtoggle {
	cursor: pointer;
}
</style>
