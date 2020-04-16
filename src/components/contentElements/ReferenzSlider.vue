<template>
	<div class="slider-backdrop relative">
		<div id="referenzSlider" class="flex items-center">
			<div class="infoSlides w-5/12">
				<swiper class="swiper swiper-no-swiping gallery-top" :options="swiperOptionTop" ref="swiperTop">
					<swiper-slide v-for="item in referenz" :key="item.node.id">
						<div class="left-part">
							<span>{{item.node.customer}}</span>
							<h2>{{item.node.project}}</h2>
							<a :href="item.node.url" rel="noopnener noreferrer" target="_blank">Website besuchen</a>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
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
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 30,
				noSwiping: true,
				pagination: {
					el: ".swiper-pagination",
					type: "fraction"
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			},
			swiperOptionThumbs: {
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
	padding: 0 5.555vw;
	h2,
	p,
	span,
	a {
		color: white;
	}
	h2 {
		font-size: 2.7vw;
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
	color: white;
}
</style>