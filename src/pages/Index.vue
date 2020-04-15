<template>
	<Layout>
		<sd-home-hero :hero="$page.hero.edges" />
		<div class="mega-container">
			<sd-services-grid></sd-services-grid>
		</div>
	</Layout>
</template>
<page-query>
query Content{
  hero: allContent{
    edges{
    node{
      headline
      bodytext
      ctr
      heroimage
    }
  }
  }
}
</page-query>
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
