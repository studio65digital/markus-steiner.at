<template>
	<Layout>
		<sd-home-hero :hero="$page.hero.edges" />
		<div class="mega-container">
			<sd-services-grid :offer="$page.offer.edges" />
		</div>
		<sd-referenzen-slider :referenz="$page.referenz.edges"></sd-referenzen-slider>
		<!-- <sd-about-me :about="$page.about.edges"></sd-about-me> -->
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
      offer: allOffer (sortBy: "offer", order: ASC){
            edges{
                  node{
                        icon
                        offer
                        bodytext
                        ctrlink
                        ctrtext
                        ctrcolor
                        backgroundimage
                  }
            }
      }
      referenz: allReferenzen{
        edges{
          node{
            mainimage
            customer
            project
            shortdescription
            url
            urltext
            slug
            techstack
            
          }
        }
      }
       about: allAbout{
            edges{
                  node{
                    pretitle 
                    pretitle2
                    myname
                    kurzbeschreibung
                    slug
                    portrait
                  }
            }
      }
}
</page-query>
<script>
import homeHero from "~/components/contentElements/heroHome/HeroHome.vue";
import servicesGrid from "~/components/contentElements/ServicesGrid.vue";
import referenzSlider from "~/components/contentElements/ReferenzSlider.vue";
import aboutMe from "~/components/contentElements/AboutMe.vue";
export default {
	components: {
		"sd-home-hero": homeHero,
		"sd-services-grid": servicesGrid,
		"sd-referenzen-slider": referenzSlider
		// "sd-about-me": aboutMe
	}
};
</script>
