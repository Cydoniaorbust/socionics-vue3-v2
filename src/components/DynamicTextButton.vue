<template>
	<button v-for="(a, i) in optionList" :key="i"
		:class="[{
			active: active === i,
			pressed: 
				press[pressId] == 1
				&& press[pressId + 1] == i,
			jazz: 
				press[pressId] == 1
				&& press[pressId + 1] == i
				&& active !== null
				&& active !== i,
		}]"
		@click="callback(pressId, i)"
	> {{ a }} </button>
</template>

<script>
export default {
	props: {
		name: String,
		optionList: { type: Array, default: () => [] },

		active: Number,
		press: { type: Array, default: () => [] },
		pressId: Number,

		callback: Function,
	}
}
</script>
