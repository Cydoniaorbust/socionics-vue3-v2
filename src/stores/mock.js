var Socionics = {
	funcs: [
		'База',	'Твор',
		'Ролв',	'Боль',
		'Сугг',	'Актв',
		'Огрн',	'Фонв',
	],
	aspectType: [
		'Рациональные', 'Иррациональные',
	],
	superAspects: [
		'Логика',	'Этика',
		'Интуиция',	'Сенсорика',
	],
	aspects: [
		'БЛ',	'ЧЛ',
		'БЭ',	'ЧЭ',
		'БИ',	'ЧИ',
		'БС',	'ЧС',
	],

	names: [
		'Дон-Кихот','Дюма',			'Робеспьер','Гюго',
		'Жуков',	'Есенин',		'Максим',	'Гамлет',
		'Джек',		'Драйзер',		'Бальзак',	'Наполеон',
		'Штирлиц',	'Достоевский',	'Габен',	'Гексли',
	],
	aliases: [
		'ИЛЭ',	'СЭИ',	'ЛИИ',	'ЭСЭ',
		'СЛЭ',	'ИЭИ',	'ЛСИ',	'ЭИЭ',
		'ЛИЭ',	'ЭСИ',	'ИЛИ',	'СЭЭ',
		'ЛСЭ',	'ЭИИ',	'СЛИ',	'ИЭЭ',
	],
	groupsList: [
		[
			{ name: 'Stack',		funcs: [0, 1, 5, 4], },
			{ name: 'Shadow',		funcs: [6, 7, 3, 2], },
		],
		[ 
			{ name: 'Ценностные',	funcs: [0, 1, 4, 5], },
			{ name: 'Неценностные',	funcs: [2, 3, 6, 7], },
		],		
		[
			{ name: 'Осознанные',	funcs: [0, 1, 2, 3], },
			{ name: 'Неосознанные',	funcs: [4, 5, 6, 7], },
		],		
		[ 
			{ name: 'Загрузочные',	funcs: [0, 3, 4, 7], },
			{ name: 'Разгрузочные',	funcs: [1, 2, 5, 6], },
		],		
		[
			{ name: 'Акцептные',	funcs: [0, 2, 4, 6], },
			{ name: 'Продуктивные',	funcs: [1, 3, 5, 7], },
		],
		[
			{ name: 'Инертные',		funcs: [0, 3, 5, 6], },
			{ name: 'Контактные',	funcs: [1, 2, 4, 7], },
		],
		[ 
			{ name: 'Шаблонные',	funcs: [0, 2, 5, 7], },
			{ name: 'Ситуативные',	funcs: [1, 3, 4, 6], },
		],
		[ 
			{ name: 'Сильные',		funcs: [0, 1, 6, 7], },
			{ name: 'Слабые',		funcs: [2, 3, 4, 5], },
		],		
	],
}
var MBTI = {
	funcs: [
		'Dom',	'Aux',
		'Demon','Trick',
		'Inf',	'Tert',
		'Oppos','Crit',
	],
	aspectType: [
		'Judging', 'Perceiving',
	],
	superAspects: [
		'Thinking',	'Feeling',
		'Intuition','Sensing',
	],
	aspects: [
		'Ti',	'Te',
		'Fi',	'Fe',
		'Ni',	'Ne',
		'Si',	'Se',
	],

	names: [
		'Debater',		'Defender',		'Logician',		'Consul',
		'Entrepreneur',	'Advocate',		'Virtuoso',		'Protagonist',
		'Commander',	'Adventurer',	'Architect',	'Entertainer',
		'Executive',	'Mediator',		'Logistician',	'Campaigner',
	],
	aliases: [
		'ENTP', 'ISFJ',	'INTP',	'ESFJ',
		'ESTP',	'INFJ',	'ISTP',	'ENFJ',
		'ENTJ',	'ISFP',	'INTJ',	'ESFP',
		'ESTJ',	'INFP',	'ISTJ',	'ENFP',
	],
	groupsList: [
		[ 
			{ name: 'Stack',		funcs: [0, 1, 5, 4], },
			{ name: 'Shadow',		funcs: [6, 7, 3, 2], },
		],
	],
}
var types = [
	{ id: 0,	seq: [5, 0, 7, 2, 6, 3, 4, 1] },
	{ id: 1,	seq: [6, 3, 4, 1, 5, 0, 7, 2] },
	{ id: 2,	seq: [0, 5, 2, 7, 3, 6, 1, 4] },
	{ id: 3,	seq: [3, 6, 1, 4, 0, 5, 2, 7] },

	{ id: 4,	seq: [7, 0, 5, 2, 4, 3, 6, 1] },
	{ id: 5,	seq: [4, 3, 6, 1, 7, 0, 5, 2] },
	{ id: 6,	seq: [0, 7, 2, 5, 3, 4, 1, 6] },
	{ id: 7,	seq: [3, 4, 1, 6, 0, 7, 2, 5] },

	{ id: 8,	seq: [1, 4, 3, 6, 2, 7, 0, 5] },
	{ id: 9,	seq: [2, 7, 0, 5, 1, 4, 3, 6] },
	{ id: 10,	seq: [4, 1, 6, 3, 7, 2, 5, 0] },
	{ id: 11,	seq: [7, 2, 5, 0, 4, 1, 6, 3] },

	{ id: 12,	seq: [1, 6, 3, 4, 2, 5, 0, 7] },
	{ id: 13,	seq: [2, 5, 0, 7, 1, 6, 3, 4] },
	{ id: 14,	seq: [6, 1, 4, 3, 5, 2, 7, 0] },
	{ id: 15,	seq: [5, 2, 7, 0, 6, 1, 4, 3] },
]
var aspCSS = [
	'white logic',			'black logic',
	'white ethic',			'black ethic',
	'white intui',			'black intui',
	'white senso',			'black senso',
]

export default {
	Socionics,
	MBTI,
	types, 
	aspCSS,
}
