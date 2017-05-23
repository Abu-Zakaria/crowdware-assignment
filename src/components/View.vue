<template>
	<div>
		<div class="view-page-wrapper">
			<router-link to="/">
				Back
			</router-link>
			<div class="view-page">
				<div>
					<p>
						Rank : {{ m_rank }}
					</p>
				</div>

				<div>
					<p>
						Title : {{ m_title }}
					</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name : "View-page",

		props: [
			'rank'
		],

		data ()
		{
			return {
				m_rank: '',
				m_title: '',
			}
		},

		mounted ()
		{
			let list = this.$store.state.movie_list


			let movie = this.findMovieByRank ()

			this.m_rank = movie.rank
			this.m_title = movie.title

			window.scrollTo(0, 0)
		},

		methods :
		{
			findMovieByRank ()
			{
				let list = this.$store.state.movie_list

				for (var i = 0; i < list.length; i++)
				{
					if ( list[i].rank == this.rank )
					{
						return list[i]
					}
				}
			}
		}
	}

</script>