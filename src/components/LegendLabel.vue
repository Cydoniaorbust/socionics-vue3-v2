<template>
	<td :colspan="colspan" 
		:class="['legendLabel', base, reactive]"
		@mouseover="callback(true, ...args)"
		@mouseleave="callback(false, ...args)"
	> {{ name }}
	</td>
</template>

<script>
export default {
	props: {
		name: String,
		
		colspan: { type: Number, default: 1 },
		
		base: String,
		reactive: { type: Array, default: () => [] },
		
		callback: Function,
		args: { type: Array, default: () => [] },
	}
}
</script>
