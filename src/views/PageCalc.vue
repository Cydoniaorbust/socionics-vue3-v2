<template>
	<main id="calc" class="container">
		<div class="left">
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(1)">
						<div class="slider" :class="{ active: propActive[1] }"></div>
					</div>
					<span> Свойства </span>
				</div>
				<div class="prop" v-for="(a, i) in supProps" :key="i" v-show="propActive[1]">
					<!-- @mouseover="desc[i] = true" @mouseleave="desc[i] = false" -->
					<!-- <div v-show="desc[i]"> {{ a.cont2 }} </div> -->
					<Option :name="a.name" :optionList="a.cont" :name2="a.cont2"
						:active="selectProp(a)"
						:press="propPress" :pressId="16+i*2"
						:callback="pressProp"/>
				</div>
			</div>
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(0)">
						<div class="slider" :class="{ active: propActive[0] }"></div></div>
					<span> Свойства 2 </span></div>
				<div class="prop" v-for="(a, i) in props" :key="i" v-show="propActive[0]">
					<!-- <span v-if="a.name"> {{ a.name }} </span> -->
					<Option :name="a.name" :optionList="a.cont" :name2="a.cont2"
						:active="selectProp(a)"
						:press="propPress" :pressId="i*2"
						:callback="pressProp"/>
				</div></div>
		</div>
		<div class="center">
			<MultiChoice name="Типы" :optionList="typeNames"
				:active="selectType"
				:press="typePress"
				:callback="pressType"/>

			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(3)">
						<div class="slider" :class="{ active: propActive[3] }"></div>
					</div>
					<span> Малые группы </span></div>
				<div class="prop" v-for="(a, i) in groups" :key="i" v-show="propActive[3]">
					<Option :name="a.name" :optionList="a.cont" :name2="a.cont2"
						:active="selectProp(a)"
						:press="propPress" :pressId="30+i*2"
						:callback="pressProp"/>
				</div></div>			
		</div>
		<div class="right">
			<!-- <div class="container r-menu">
				<div class="tumblerWrap">
					<span>Легенда</span>
					<div class="tumbler" @click="switchLegend">
						<div class="slider" :class="{ active: legend }"></div></div></div>
				<div class="tumblerWrap">
					<span>Socionics/MBTI</span>
					<div class="tumbler" @click="switchMBTI">
						<div class="slider" :class="{ active: MBTI }"></div></div></div>
				<select v-model="selected">
					<option :value="null" @change="selected = null"> Reset </option>
					<option v-for="type in types" :key="type.id"
						:value="type.id" @change="selected = type.id"> {{
							notation.aliases[type.id]+ "--" +
							notation.names[type.id]
						}} </option></select>
				<select v-model="grouping" v-show="!MBTI">
					<option v-for="gs, i in notation.groupsList" :key="i"
						:value="i" @change="grouping = i">
					{{ gs[0].name + '/' + gs[1].name }} </option></select>
			</div> -->
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(2)">
						<div class="slider" :class="{ active: propActive[2] }"></div>
					</div>
					<span> Ложные признаки </span></div>
				<div class="prop" v-for="(a, i) in falseProps" :key="i" v-show="propActive[2]">
					<span> {{ a.name }} </span>
					<div class="options">
						<Option name="" :optionList="a.cont" :name2="a.cont2"
							:active="selectProp(a)"
							:press="propPress" :pressId="22+i*2"
							:callback="pressProp"/>
					</div>
				</div></div>
			<div class="container">
				<button @click="resetAll">Reset</button></div>
		</div>
	</main>
</template>

<script>
import text from '../stores/text.js'
import mock from '../stores/mock.js'
import Option from '../components/PageOption.vue'
import MultiChoice from  '../components/PageMultiChoice.vue'

export default {
	data() {
		return {
			ls: null,

			propActive: [1, 1, 1, 1],
			supProps: text.supProps,
			props: text.props,
			falseProps: text.falseProps,
			groups: text.groups,

			typeNames: mock.Socionics.names,

			typePress: [
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0,
			],
			propPress: [
				0, 0, 0, 0,	//ценн 0
				0, 0, 0, 0,	//сила
				0, 0, 0, 0,	//инрт
				0, 0, 0, 0,	//загр 15

				0, 0,		//шабл 16
				0, 0,		//акцп
				0, 0,		//мент 21

				0, 0,		//резу 22
				0, 0,		//квес
				0, 0,		//пози
				0, 0,		//арис 29

				0, 0,		//квад 30
				0, 0,		//клуб
				0, 0,		//комм
				0, 0,		//план
				0, 0,		//стим
				0, 0,		//темп
				0, 0,		//аргу
				0, 0,		//стре 45
			],
			// desc: [0,0,0,0, 0,0,0, 0,0,0,0, 0,0,0,0,0,0,0,0],
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
		selectTypeHelper(select, array, shift) {
			let propsPressed = 0;

			for (let i = 0; i < array.length; i++) {

				if (this.propPress[shift+i*2] == 1) {
					propsPressed++;
					if (this.propPress[shift+i*2+1] != array[i].seq[select]) return false;
				}
			}
			return propsPressed;
		},
		selectType(select) {
			let propsPressed = 0;
			// let tmp = 0;

			for (let i = 0; i < 8; i++) {
				if (this.propPress[i*2] == 1) {
					propsPressed++;
					if (this.propPress[i*2+1] != this.props[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < 3; i++) {
				if (this.propPress[16+i*2] == 1) {
					propsPressed++;
					if (this.propPress[16+i*2+1] != this.supProps[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < 4; i++) {
				if (this.propPress[22+i*2] == 1) {
					propsPressed++;
					if (this.propPress[22+i*2+1] != this.falseProps[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < this.groups.length; i++) {
				if (this.propPress[30+i*2] == 1) {
					propsPressed++;
					if (this.propPress[30+i*2+1] != this.groups[i].seq[select]) return false;
				}
			}

			// tmp == this.selectTypeHelper(select, this.props, 0);

			// if(tmp === false) return false; else propsPressed += tmp;
			// tmp == this.selectTypeHelper(select, this.supProps, 16);
			// if(tmp === false) return false; else propsPressed += tmp;
			// tmp == this.selectTypeHelper(select, this.falseProps, 22);
			// if(tmp === false) return false; else propsPressed += tmp;
			// tmp == this.selectTypeHelper(select, this.groups, 30);
			// if(tmp === false) return false; else propsPressed += tmp;
			// console.log(propsPressed);

			return propsPressed == 0 ? null : true;
		},		
		selectProp(select) {
			let value = null;

			for (let i = 0; i < 16; i++) {
				if (this.typePress[i] == 1) {
					if (value === null) value = select.seq[i];
					else if (select.seq[i] != value) return null;
				}
			}

			return value;
		},
		pressType(pressId) {
			this.typePress[pressId] == 0
			? this.typePress.splice(pressId, 1, 1)
			: this.typePress.splice(pressId, 1, 0);
		},
		pressProp(pressId, whichValue) {
			let whichId = pressId + 1;

			this.propPress[pressId] == 0
			? this.propPress.splice(pressId, 2, 1, whichValue)
			: this.propPress[whichId] == whichValue
				? this.propPress.splice(pressId, 1, 0)
				: this.propPress.splice(whichId, 1, whichValue);
		},
		resetAll() {
			for (let i = 0; i < this.typePress.length; i++) { this.typePress.splice(i, 1, 0) }
			for (let i = 0; i < this.propPress.length; i++) { this.propPress.splice(i, 1, 0) }
		}
	},
	created() {
		this.ls = window.localStorage;
		let propActive = this.ls.getItem('propActive');
		
		if (!propActive) return;
		try { this.propActive = JSON.parse(propActive); }
		catch (e) { return; }
	},
	components: {
		Option, MultiChoice
	},
}	
</script>
