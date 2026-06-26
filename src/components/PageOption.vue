<template>
	<span v-if="name"> {{ name }} </span>
	<div class="option">
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
		> {{ a }}
			<div class="iconHolder">
				<div v-for="(b, j) in name2[i]" :key="j" :class="'icon ' + b"
				><br><br> {{ b }}
				</div>
			</div>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		name2: { type: Array, default: () => [] },
		optionList: { type: Array, default: () => [] },

		active: Number,
		press: { type: Array, default: () => [] },
		pressId: Number,

		callback: Function,
	},
}
</script>
