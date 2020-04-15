<template>
	<div class="servicesGrid grid grid-cols-3 gap-12">
		<div class="card bg-secondary">
			<i>Icon</i>
			<h2>Frontend Development</h2>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
			<g-link to="/ctr" class="ctr white">CTR Button</g-link>
		</div>
		<div class="card bg-primary">
			<i>Icon</i>
			<h2>Interface & Experience</h2>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
			<g-link to="/ctr" class="ctr white">CTR Button</g-link>
		</div>
		<div class="card bg-dark">
			<i>Icon</i>
			<h2>Digital Consulting</h2>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
			<g-link class="ctr white" to="/ctr">CTR Button</g-link>
		</div>
	</div>
</template>
<script >
</script>

<style lang="scss" scoped>
.card {
	padding: 3vw;
	* {
		color: white;
	}
}
h2 {
	font-size: 3vw;
	margin-bottom: 2vw;
}
</style>