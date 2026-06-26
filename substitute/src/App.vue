<template>
	<Header />
	<router-view></router-view>
	<Footer />
</template>

<script setup>
console.log('logged by "App.vue", included via Vite');
import Header from './parts/PageHeader.vue'
import Footer from './parts/PageFooter.vue'
</script>

<script>
export default {
	data() {
		return { v: '0.1' }
	},
	components: {
		Header, Footer
	}
}
</script>
