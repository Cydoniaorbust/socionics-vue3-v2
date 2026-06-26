<template>
	<main id="calc" class="container">
		<div class="left">
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(0)">
						<div class="slider" :class="{ active: propActive[0] }"></div>
					</div>
					<span> Свойства </span></div>
				<div class="prop" v-for="(a, i) in props" :key="i" v-show="propActive[0]">
					<div class="separator"></div>
					<Option name="" :optionList="a.cont"
						:active="funcPress === null ? null : a.seq[funcPress]"
						:press="propPress" :pressId="i*2"
						:callback="pressProp"/>
				</div></div>
		</div>
		<div class="center">
			<div class="icons">
				<button v-for="func, i in funcNames" :key="i"
					:class="[{ 
						active: selectFunc(i) === true,
						pressed: funcPress === i,
						jazz:
							funcPress === i
							&& selectFunc(i) !== null
							&& selectFunc(i) === false,
					}]"
					@click="pressFunc(i)"> {{ func }} </button></div>		
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(1)">
						<div class="slider" :class="{ active: propActive[1] }"></div>
					</div>
					<span> Другое </span></div>
				<div class="prop" v-for="(a, i) in other" :key="i" v-show="propActive[1]">
					<span> {{ a.name }} </span>
					<Option name="" :optionList="a.cont"
						:active="funcPress === null ? null : a.seq[funcPress]"
						:press="propPress" :pressId="16+i*2"
						:callback="pressProp"/>
				</div></div>
		</div>
		<div class="right">
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(2)">
						<div class="slider" :class="{ active: propActive[2] }"></div></div>
					<span> Свойства 2 </span></div>
				<div class="prop" v-for="(a, i) in supProps" :key="i" v-show="propActive[2]">
					<div class="separator"></div>
					<Option name="" :optionList="a.cont"
						:active="funcPress === null ? null : a.seq[funcPress]"
						:press="propPress" :pressId="18+i*2"
						:callback="pressProp"/>
				</div></div>
		</div>
	</main>
</template>

<script>
import funcs from '../stores/funcs.js'
import mock from '../stores/mock.js'
import Option from '../components/PageOption.vue'

export default {
	data() {
		return {
			ls: null,

			propActive: [1, 1, 1],
			props: funcs.props,
			other: funcs.other,
			supProps: funcs.supProps,

			funcNames: mock.Socionics.funcs,

			funcPress: null,
			propPress: [
				0, 0, 0, 0,	//ценн 0
				0, 0, 0, 0,	//сила
				0, 0, 0, 0,	//инрт
				0, 0, 0, 0,	//загр 15

				0, 0,		//блоки 16

				0, 0,		//акцп 18
				0, 0,		//мент
				0, 0,		//шабл 23
			]
		}
	},
	computed: {
	},
	methods: {
		switchProp(id) {
			console.log(id);
			console.log(this.propActive);

			this.propActive[id] == 0
			? this.propActive.splice(id, 1, 1)
			: this.propActive.splice(id, 1, 0);

			console.log(this.propActive);

			this.ls.setItem('propActive', JSON.stringify(this.propActive));
		},
		selectFunc(select) {
			let propsPressed = 0;

			for (let i = 0; i < 8; i++) {
				if (this.propPress[i*2] == 1) {
					propsPressed++;
					if (this.propPress[i*2+1] != this.props[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < 1; i++) {
				if (this.propPress[16+i*2] == 1) {
					propsPressed++;
					if (this.propPress[16+i*2+1] != this.other[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < 3; i++) {
				if (this.propPress[18+i*2] == 1) {
					propsPressed++;
					if (this.propPress[18+i*2+1] != this.supProps[i].seq[select]) return false;
				}
			}			

			return propsPressed == 0 ? null : true;
		},
		pressFunc(press) {
			this.funcPress == press
			? this.funcPress = null
			: this.funcPress = press;
		},
		pressProp(pressId, whichValue) {
			let whichId = pressId + 1;

			this.propPress[pressId] == 0
			? this.propPress.splice(pressId, 2, 1, whichValue)
			: this.propPress[whichId] == whichValue
				? this.propPress.splice(pressId, 1, 0)
				: this.propPress.splice(whichId, 1, whichValue);
		},
	},
	created() {
		this.ls = window.localStorage;
		let propActive = this.ls.getItem('propActive');
		
		if (!propActive) return;
		try { this.propActive = JSON.parse(propActive); }
		catch (e) { return; }
	},
	components: {
		Option
	},
}	
</script>
