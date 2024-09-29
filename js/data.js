const mapa = [
	{
		id: 1,
		image: './src/platforma.jpg',
		object: 'platforma',
		depth: '6m',
		timeFromStart: '2min',
		danger: 'brak',
		position: {
			left: 54.8,
			top: 74.9,
		},
	},
	{
		id: 2,
		image: './src/test.jpg',
		object: 'wózki 2 szt.',
		depth: '8m',
		timeFromStart: '12min',
		danger: 'brak',
		position: {
			left: 57.7,
			top: 72.4,
		},
	},
	{
		id: 3,
		image: './src/test.jpg',
		object: 'palisada drewniana',
		depth: '9m',
		timeFromStart: '12min',
		danger: 'brak',
		position: {
			left: 60.7,
			top: 70,
		},
	},
	{
		id: 4,
		image: './src/test.jpg',
		object: 'kajak',
		depth: '10m',
		timeFromStart: '9min',
		danger: 'brak',
		position: {
			left: 64.9,
			top: 66.7,
		},
	},
	{
		id: 5,
		image: './src/platforma2.jpg',
		object: 'platforma',
		depth: '11m',
		timeFromStart: '11min',
		danger: 'brak',
		position: {
			left: 62.9,
			top: 63,
		},
	},
	{
		id: 6,
		image: './src/viking.jpg',
		object: 'łódź wikingów',
		depth: '12m',
		timeFromStart: '17min',
		danger: 'brak',
		position: {
			left: 66.4,
			top: 69.3,
		},
	},
	{
		id: 7,
		image: './src/test.jpg',
		object: 'titanic',
		depth: '13m',
		timeFromStart: '19min',
		danger: 'brak',
		position: {
			left: 75.2,
			top: 68.2,
		},
	},
	{
		id: 8,
		image: './src/test.jpg',
		object: 'potiomkin',
		depth: '14m',
		timeFromStart: '24min',
		danger: 'brak',
		position: {
			left: 95.9,
			top: 64.3,
		},
	},
	{
		id: 9,
		image: './src/test.jpg',
		object: 'łódź abbys',
		depth: '32m',
		timeFromStart: '28min',
		danger: 'brak',
		position: {
			left: 82.45,
			top: 47.3,
		},
	},
	{
		id: 10,
		image: './src/test.jpg',
		object: 'skrzyżowanie',
		depth: '38m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 90,
			top: 39,
		},
	},
	{
		id: 11,
		image: './src/krzyz.jpg',
		object: 'krzyż i ścianka',
		depth: '21m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 96.75,
			top: 39.4,
		},
	},
	{
		id: 12,
		image: './src/test.jpg',
		object: 'Głębia',
		depth: '39.3m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 96.95,
			top: 24.1,
		},
	},
	{
		id: 13,
		image: './src/test.jpg',
		object: '„żelastwo”',
		depth: '36m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 67.65,
			top: 28.82,
		},
	},
	{
		id: 14,
		image: './src/test.jpg',
		object: 'żaglówka',
		depth: '33m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 52.45,
			top: 29.2,
		},
	},
	{
		id: 15,
		image: './src/test.jpg',
		object: 'łódź duża',
		depth: '34m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 35.1,
			top: 25.55,
		},
	},
	{
		id: 16,
		image: './src/test.jpg',
		object: 'żaglówka omega',
		depth: '30m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 5.73,
			top: 46.2,
		},
	},
	{
		id: 17,
		image: './src/polonezTruck.jpg',
		object: 'polonez truck',
		depth: '27m',
		timeFromStart: '??min',
		danger: 'brak',
		position: {
			left: 18.25,
			top: 44.7,
		},
	},
	{
		id: 18,
		image: './src/test.jpg',
		object: 'maszt z łodzi',
		depth: '27m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 32.24,
			top: 45.4,
		},
	},
	{
		id: 19,
		image: './src/kolek.jpg',
		object: 'kołek',
		depth: '22m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 31.9,
			top: 51,
		},
	},
	{
		id: 20,
		image: './src/sprinter2.jpg',
		object: 'sprinter',
		depth: '18-22m',
		timeFromStart: '??in',
		danger: 'brak',
		position: {
			left: 32.8,
			top: 54,
		},
	},
	{
		id: 21,
		image: './src/trabant.jpg',
		object: 'Trabant',
		depth: '10m',
		timeFromStart: '12min',
		danger: 'brak',
		position: {
			left: 33.2,
			top: 74.1,
		},
	},
	{
		id: 22,
		image: './src/kontener.jpg',
		object: 'kontener',
		depth: '11m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 41.6,
			top: 71.7,
		},
	},
	{
		id: 23,
		image: './src/test.jpg',
		object: 'rower wodny',
		depth: '11m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 48.87,
			top: 70,
		},
	},
	{
		id: 24,
		image: './src/kuchniaPolowa.jpg',
		object: 'kuchnia polowa',
		depth: '10m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 55.3,
			top: 70.6,
		},
	},
	{
		id: 25,
		image: './src/test.jpg',
		object: 'skrzyżowanie',
		depth: '12m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 55.68,
			top: 67.45,
		},
	},
	{
		id: 26,
		image: './src/rower.jpg',
		object: 'rower',
		depth: '17m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 56.3,
			top: 63.2,
		},
	},
	{
		id: 27,
		image: './src/ramie.jpg',
		object: 'ramię żurawia',
		depth: '18-20m',
		timeFromStart: '9min',
		danger: 'brak',
		position: {
			left: 49.35,
			top: 53.25,
		},
	},
	{
		id: 28,
		image: './src/platfroma25.jpg',
		object: 'platforma',
		depth: '25m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 58.25,
			top: 49.15,
		},
	},
	{
		id: 29,
		image: './src/test.jpg',
		object: 'wiosło',
		depth: '29m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 53.33,
			top: 45,
		},
	},
	{
		id: 30,
		image: './src/lancuch.jpg',
		object: 'łańcuch',
		depth: '4m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 45.72,
			top: 77.45,
		},
	},
	{
		id: 31,
		image: './src/brzoza.jpg',
		object: 'powalona brzoza',
		depth: '5m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 30.2,
			top: 82.5,
		},
	},
	{
		id: 32,
		image: './src/brzoza1.jpg',
		object: 'powalona brzoza',
		depth: '6m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 21.7,
			top: 82.5,
		},
	},
	{
		id: 33,
		image: './src/test.jpg',
		object: 'pomost ZHP',
		depth: '0m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 2.02,
			top: 81.25,
		},
	},
	{
		id: 34,
		image: './src/osmiornica.jpg',
		object: 'Ośmiornica',
		depth: '20m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 5.0,
			top: 66.0,
		},
	},
	{
		id: 35,
		image: './src/test.jpg',
		object: '„żelastwo”',
		depth: '9m',
		timeFromStart: '??',
		danger: 'brak',
		position: {
			left: 3.4,
			top: 76.0,
		},
	},
]
