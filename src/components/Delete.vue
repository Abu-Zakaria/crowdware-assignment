<template>
	<div>
		<div class="delete-page-wrapper">
			<router-link to="/">
				Back
			</router-link>
			<p>
				Process : Delete a movie.....
			</p>
			<p>
				Movie info :
				<br>
				<br>
				- Rank : {{ m_rank }} <br>
				<br>
				- Title : {{ m_title }}
			</p>
			<br>
			<h4>
				Are you sure?
			</h4>
			<div>
				<button @click="deleteMovie()">
					Yes
				</button>

				<button @click="redirect ('/')">
					No
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name : "Delete-page",

		props : [
			'rank'
		],

		data ()
		{
			return {
				m_rank : 0,
				m_title : '',
				list : []
			}
		},

		mounted ()
		{
			this.list = this.$store.state.movie_list

			let movie = this.findMovieByRank ()

			this.m_rank = movie.rank
			this.m_title = movie.title

			console.log(movie)

		},

		methods :
		{
			deleteMovie ()
			{
				let index;

				for (var i = 0; i < this.list.length; i++) {

					if ( this.list[i].rank == this.rank )
					{
						index = i
						break;
					}
				}

				this.$store.commit('delete', index)

				this.$router.push('/')
			},

			redirect (path)
			{
				this.$router.push(path)
			},

			findMovieByRank ()
			{
				let list = this.list

				for (var i = 0; i < list.length; i++)
				{
					let route_rank = this.rank

					if ( list[i].rank == route_rank )
					{
						return list[i]
					}
				}
			}
		}
	}

</script>