<template>
	<Layout>
		<sd-home-hero :hero="$page.hero.edges" />
		<div class="mega-container">
			<sd-services-grid></sd-services-grid>
		</div>
	</Layout>
</template>
<page-query>
query ContentHome{
  hero: allHero{
    edges{
    node{
      headline
      bodytext
      ctrlink
      ctrtext
      heroimage
    }
  }
  }
  offer: allOffer{
        edges{
              node{
                  icon
                  headline
                  bodytext
                  ctrlink
                  ctrtext  
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
