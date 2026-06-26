<template>
	<span> {{ name }} </span>
	<div class="icons">
		<button v-for="(a, i) in optionList" :key="i"
			:class="[{ 
				active: active(i) === true,
				pressed: press[i] === 1,
				jazz:
					press[i] === 1
					&& active(i) !== null
					&& active(i) === false,
			}]"
			@click="callback(i)"
			> {{ a }} 
		</button>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		optionList: { type: Array, default: () => [] },

		active: Function,
		press: { type: Array, default: () => [] },

		callback: Function,
	},
}
</script>
