<template>
	<Layout>
		<sd-home-hero :hero="$page.hero.edges" />
		<div class="mega-container">
			<sd-services-grid :offer="$page.offer.edges" />
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
                        offer
                        bodytext
                        ctrlink
                        ctrtext
                        ctrcolor
                        background  
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
