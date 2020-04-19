<template>
	<div class="slider-backdrop relative">
		<div id="referenzSlider" class="flex items-center">
			<div class="infoSlides w-5/12">
				<div
					v-swiper:swiperLeft="swiperOptionTop"
					class="swiper swiper-no-swiping gallery-top"
					ref="swiperTop"
				>
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in referenz" :key="item.node.id">
							<div class="left-part">
								<span class="customer">{{item.node.customer}}</span>
								<h2 class="project-headline">{{item.node.project}}</h2>
								<a class="ext-link" :href="item.node.url" rel="noopnener noreferrer" target="_blank">
									<svg
										width="17px"
										height="17px"
										viewBox="0 0 17 17"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g transform="translate(-112.000000, -2785.000000)" fill="#ED6663" fill-rule="nonzero">
												<g id="link" transform="translate(112.000000, 2785.000000)">
													<path
														d="M9.682,10.998 C8.739,10.998 7.796,10.639 7.078,9.921 C6.883,9.726 6.883,9.409 7.078,9.214 C7.273,9.019 7.59,9.019 7.785,9.214 C8.831,10.26 10.532,10.26 11.578,9.214 L15.214,5.578 C16.26,4.532 16.26,2.831 15.214,1.785 C14.168,0.739 12.467,0.739 11.421,1.785 L8.353,4.853 C8.158,5.048 7.841,5.048 7.646,4.853 C7.451,4.658 7.451,4.341 7.646,4.146 L10.714,1.078 C12.15,-0.358 14.486,-0.358 15.921,1.078 C17.356,2.514 17.357,4.85 15.921,6.285 L12.285,9.921 C11.567,10.639 10.624,10.998 9.681,10.998 L9.682,10.998 Z"
														id="Path"
													/>
													<path
														d="M3.682,16.998 C2.739,16.998 1.796,16.639 1.078,15.921 C-0.358,14.485 -0.358,12.149 1.078,10.714 L4.714,7.078 C6.15,5.642 8.486,5.642 9.921,7.078 C10.116,7.273 10.116,7.59 9.921,7.785 C9.726,7.98 9.409,7.98 9.214,7.785 C8.168,6.739 6.467,6.739 5.421,7.785 L1.785,11.421 C0.739,12.467 0.739,14.168 1.785,15.214 C2.831,16.26 4.532,16.26 5.578,15.214 L8.646,12.146 C8.841,11.951 9.158,11.951 9.353,12.146 C9.548,12.341 9.548,12.658 9.353,12.853 L6.285,15.921 C5.567,16.639 4.624,16.998 3.681,16.998 L3.682,16.998 Z"
														id="Path"
													/>
												</g>
											</g>
										</g>
									</svg>
									{{item.node.urltext}}
								</a>
							</div>
						</div>
					</div>
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
					<div class="swiper-button-prev" slot="button-prev">
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
				</div>
			</div>
			<div class="imageSlides w-7/12">
				<div
					v-swiper:swiperRight="swiperOptionThumbs"
					class="swiper swiper-no-swiping gallery-thumbs"
					ref="swiperThumbs"
				>
					<div class="swiper-wrapper">
						<div class="image swiper-slide" v-for="item in referenz" :key="item.node.id">
							<g-image :src="item.node.mainimage"></g-image>
							<div class="techstack">
								<span class="block mb-2 font-bold">Tech Stack:</span>
								<div class="stack-item" :class="tech" v-for="tech in item.node.techstack" :key="tech"></div>
								<!-- <div ></div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
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
	directives: {
		swiper: directive
	},
	data() {
		return {
			swiperOptionTop: {
				loop: false,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 30,
				speed: 700,
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
				loop: false,
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
			this.swiperLeft.controller.control = this.swiperRight;
			this.swiperRight.controller.control = this.swiperLeft;
		});
	}
};
</script>

<style lang="scss" scoped>
</style>