<template>
	<Layout>
		<sd-home-hero />
		<div class="mega-container">
			<sd-services-grid></sd-services-grid>
		</div>
	</Layout>
</template>
<script>
import homeHero from "../components/contentElements/heroHome/HeroHome.vue";
import servicesGrid from "../components/contentElements/ServicesGrid.vue";
export default {
	components: {
		"sd-home-hero": homeHero,
		"sd-services-grid": servicesGrid
	}
};
</script>
