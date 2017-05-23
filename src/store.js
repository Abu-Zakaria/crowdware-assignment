import Vue from 'vue'
import Vuex from 'vuex'
import movie_list from './storage/imdb-movie-list.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		movie_list : movie_list
	},

	mutations :
	{
		update( state, args )
		{
			state.movie_list[args.index]['title'] = args.title;

			console.log(args.title)
		},

		delete ( state, index )
		{
			console.log(index)
			state.movie_list.splice(index, 1)
		},

		create ( state, args)
		{
			let newMovie = {
				rank: args.rank,
				title: args.title
			}
			state.movie_list.push(newMovie)
		}
	}
})