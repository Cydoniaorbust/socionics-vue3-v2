<template>
	<header id="header">
		<nav id="head-menu" class="container">
			<router-link to="/">Калькулятор</router-link>
			<router-link to="/table">Таблица</router-link>
			<router-link to="/funcs">Функции</router-link>
		</nav>
		<ThemeSwitcher />
	</header>
	
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
	components: { ThemeSwitcher }
}
</script>
