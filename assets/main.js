const { createApp } = Vue

createApp({
	data() {
		return {
			message: 'Hola',
			message1: 'Vue',
			datos: [],
			link: '',
			pelicula1: {},
		}
	},

	created() {
		this.message = 'Creado'
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd'
		)
			.then((response) => response.json())
			.then((response) => {
				this.datos = response.results
				this.cargar()
			})
	},

	methods: {
		cargar() {
			this.pelicula1 = this.datos[0]
			this.link = 'https://image.tmdb.org/t/p/w500' + this.pelicula1.backdrop_path
			console.log(this.pelicula1)
		},
	},

	mounted() {},

	computed: {},
}).mount('#app')
