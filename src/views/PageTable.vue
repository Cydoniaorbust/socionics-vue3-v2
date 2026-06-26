<template>
	<main id="table" class="container">
		
		<div class="container l-menu">
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
		</div>
		<div style="flex-grow: 1;">
			<div class="tableWrap" v-show="legend">
				<table class="legend">
					<tr>
						<LegendLabel base="all"	:colspan="8"
							:reactive="[{ active: checkActive(0,1,2,3,4,5,6,7) }]"
							:callback="showActive" :args="[0, 8]"/>
					</tr>
					<tr>
						<LegendLabel base="nality ratio" :colspan="4"
							:reactive="[{ active: checkActive(0,1,2,3) }]"
							:callback="showActive" :args="[0, 4]"/>
						<LegendLabel base="nality irrat" :colspan="4"
							:reactive="[{ active: checkActive(4,5,6,7) }]"
							:callback="showActive" :args="[4, 4]"/>
					</tr>
					<tr>
						<LegendLabel base="aspect logic" :colspan="2"
							:name="notation.superAspects[0]"
							:reactive="[{ active: checkActive(0,1) }]"
							:callback="showActive" :args="[0, 2]"/>
						<LegendLabel base="aspect ethic" :colspan="2"
							:name="notation.superAspects[1]"
							:reactive="[{ active: checkActive(2,3) }]"
							:callback="showActive" :args="[2, 2]"/>
						<LegendLabel base="aspect intui" :colspan="2"
							:name="notation.superAspects[2]"
							:reactive="[{ active: checkActive(4,5) }]"
							:callback="showActive" :args="[4, 2]"/>
						<LegendLabel base="aspect senso" :colspan="2"
							:name="notation.superAspects[3]"
							:reactive="[{ active: checkActive(6,7) }]"
							:callback="showActive" :args="[6, 2]"/>
					</tr>
					<tr>
						<LegendLabel base="sub-aspect"
							v-for="(c, i) in aspCSS" :key="i"
							:name="notation.aspects[i]"
							:reactive="[[c], { active: checkActive(i) }]"
							:callback="showActive" :args="[i, 1]"/>
					</tr></table>
			</div>
			<div class="tableWrap">
				<table class="zebra">
					<!-- заголовок -->
						<tr>
							<th colspan="2" rowspan="2"></th>
							<th colspan="4"> {{ groups[0].name }} </th>
							<th colspan="4"> {{ groups[1].name }} </th></tr>
						<tr>
							<td v-for="f in groups[0].funcs" :key="f"> {{ notation.funcs[f] }} </td>
							<td v-for="f in groups[1].funcs" :key="f"> {{ notation.funcs[f] }} </td></tr>
					<!-- типы -->
						<tr v-for="type in filteredTypes" :key="type.id">
							<!-- имена -->
								<td> {{ notation.names[type.id] }} </td>
								<td> {{ notation.aliases[type.id] }} </td>
							<!-- аспекты -->
								<td v-for="n in groups[0].funcs" :key="n" 
									:class="[aspCSS[type.seq[n]], { active: aspects[type.seq[n]] }]"> {{ notation.aspects[type.seq[n]] }} </td>
								<td v-for="n in groups[1].funcs" :key="n" 
									:class="[aspCSS[type.seq[n]], { active: aspects[type.seq[n]] }]"> {{ notation.aspects[type.seq[n]] }} </td>
						</tr></table>
			</div></div>
	</main>
</template>

<script>
import mock from '../stores/mock.js'
import LegendLabel from '../components/LegendLabel.vue'

export default {
	data() {
		return {
			ls: null,

			types: mock.types,
			aspCSS: mock.aspCSS,

			MBTI: false,
			legend: true,

			selected: null,
			grouping: 0,

			aspects: [
				false,	false,	//БЛ	ЧЛ
				false,	false,	//БЭ	ЧЭ
				false,	false,	//БИ	ЧИ
				false,	false	//БС	ЧС
			],
		}
	},
	computed: {
		filteredTypes() {
			return this.selected === null
				? this.types
				: this.types.filter((type, i) => i === this.selected)
		},
		notation() { return this.MBTI ? mock.MBTI : mock.Socionics; },
		groups() { return this.notation.groupsList[this.grouping]; },
	},
	methods: {
		switchMBTI() {
			this.MBTI = !this.MBTI;
			this.ls.setItem('MBTI', Number(this.MBTI));
			this.grouping = 0;
		},
		switchLegend() {
			this.legend = !this.legend;
			this.ls.setItem('legend', Number(this.legend));
		},
		showActive(value, start = 0, length = 8) {
			let values = new Array(length).fill(value);
			this.aspects.splice(start, length, ...values);
		},
		checkActive(...n) {
			for (let i = 0; i < n.length; i++) {
				if (!this.aspects[n[i]]) return false;
			}
			return true;
		}
	},
	created() {
		this.ls = window.localStorage;
		this.MBTI = Boolean(Number(this.ls.getItem('MBTI'))) || false;
		this.legend = Boolean(Number(this.ls.getItem('legend'))) || false;
	},
	components: { LegendLabel }
}	
</script>
