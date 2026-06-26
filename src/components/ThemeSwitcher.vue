<template>
	<div id="theme" class="tumbler" @click="switchTheme">
		<div id="theme" class="slider" :class="{ active: isActive }"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ls: null,
			theme: 'light',
			link: null,
			isActive: false,
		}
	},
	methods: {
		switchTheme() {
			this.theme = (this.theme === 'light') ? 'dark' : 'light';
			this.ls.setItem('theme', this.theme);
			this.applyTheme();
		},
		applyTheme() {
			this.link.setAttribute('href', `/assets/${this.theme}.css?${this.$root.v}`);
			this.isActive = (this.theme === 'light') ? false : true;
		}
	},
	created() {
		this.ls = window.localStorage;
		this.theme = this.ls.getItem('theme') || 'light';
		this.link = document.getElementById('theme-link');

		this.applyTheme();
	}
}
</script>
