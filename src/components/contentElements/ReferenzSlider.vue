<template>
	<div class="slider-backdrop relative">
		<div id="referenzSlider" class="flex items-center">
			<div class="infoSlides w-5/12">
				<swiper
					class="swiper swiper-no-swiping gallery-top"
					:options="swiperOptionTop"
					ref="swiperTop"
					@transitionStart="onSwiperSlideChangeTransitionStart"
				>
					<swiper-slide v-for="item in referenz" :key="item.node.id">
						<div class="left-part">
							<span>{{item.node.customer}}</span>
							<h2 class="project-headline">{{item.node.project}}</h2>
							<a
								class="ext-link"
								:href="item.node.url"
								rel="noopnener noreferrer"
								target="_blank"
							>Website besuchen</a>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-next" slot="button-next">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="swiper-next"
							width="23"
							height="17"
							viewBox="0 0 23 17"
						>
							<path
								d="M22.817,8.038,15.358.191a.6.6,0,0,0-.879,0,.679.679,0,0,0,0,.925l6.4,6.73H.622a.655.655,0,0,0,0,1.308H20.876l-6.4,6.73a.679.679,0,0,0,0,.925.6.6,0,0,0,.88,0l7.459-7.847a.679.679,0,0,0,0-.925Z"
							/>
						</svg>
					</div>
				</swiper>
			</div>
			<div class="imageSlides w-7/12">
				<swiper
					class="swiper swiper-no-swiping gallery-thumbs"
					:options="swiperOptionThumbs"
					ref="swiperThumbs"
				>
					<swiper-slide class="imagedf" v-for="item in referenz" :key="item.node.id">
						<g-image :src="item.node.mainimage"></g-image>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>
<script >
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
	props: {
		referenz: {
			type: Array,
			required: true
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			swiperOptionTop: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 30,
				speed: 700,
				noSwiping: true,
				pagination: {
					el: ".swiper-pagination",
					type: "fraction"
				},
				navigation: {
					nextEl: ".swiper-button-next"
				}
			},
			swiperOptionThumbs: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				noSwiping: true,
				centeredSlides: true,
				slidesPerView: "auto"
			}
		};
	},
	mounted() {
		this.$nextTick(() => {
			const swiperTop = this.$refs.swiperTop.$swiper;
			const swiperThumbs = this.$refs.swiperThumbs.$swiper;
			swiperTop.controller.control = swiperThumbs;
			swiperThumbs.params.control = swiperTop;
		});
	},
	methods: {
		onSwiperSlideChangeTransitionStart() {
			document.querySelector(".project-headline").add("fadeout");
		}
	}
};
</script>

<style lang="scss" scoped>
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
	h2 {
		font-size: 2.7vw;
	}
	span {
		font-family: "Gilroy";
		font-weight: 300;
		opacity: 0.5;
		font-size: 1vw;
		padding-left: 7vw;
	}
	h2 {
		margin-top: 4vw;
		margin-bottom: 4vw;
	}
	.ext-link {
		font-family: "Gilroy";
		font-weight: 700;
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
	font-size: 1vw;
	text-align: left;
	font-weight: 700;
	width: 7vw;
}

.swiper-pagination-fraction:after {
	content: "";
	height: 1px;
	background: white;
	width: 3vw;
	display: inline-block;
	margin-left: 1vw;
	position: relative;
	bottom: 0.4vw;
}
.swiper-button-next {
	bottom: 0;
	top: auto;
}
.swiper-button-next:after {
	content: "";
}
.swiper-next {
	path {
		fill: white;
		transition: all 0.3s ease-in-out;
	}
}
.swiper-button-next {
	width: 3vw;
	height: 3vw;
	border: 1px solid white;
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
.swiper-button-next:focus {
	outline: none;
	box-shadow: none;
}
.swiper-slide-next .project-headline {
	opacity: 0;
	margin-left: 3rem;
}
.swiper-slide-active .project-headline {
	opacity: 1;
	transition: all 1s;
	transition-delay: 0.6s;
	margin-left: 0rem;
}
.swiper-slide-prev .project-headline {
	opacity: 0;
	transition: all 0.5s;
	margin-left: -5rem;
}
</style>