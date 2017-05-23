<template>
	<div>
		<div class="edit-page-wrapper">
			<router-link to="/">
				Back
			</router-link>
			<div class="edit-form-wrapper">
				<form @submit.prevent="onSubmit()">
					<input type="text"
						v-model="title"
						class="title-input-file" 
						placeholder="Title of the movie...">

					<button>
						Update
					</button>
				</form>
				<p>
					{{ feedback }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name : 'Edit-page',

		props : [
			'rank'
		],

		data ()
		{
			return {
				title: '',
				feedback: ''
			}
		},

		mounted ()
		{
			let list = this.$store.state.movie_list
			let index = this.findIndexOfTheMovie()

			this.index = index

			this.title = list[index].title

			window.scrollTo(0, 0)
		},

		methods :
		{
			onSubmit ()
			{
				this.updateTitle ( this.index, this.title )
			},

			updateTitle ( index, title )
			{
				this.$store.commit('update', {
					index: index,
					title: title
				})

				this.feedback = "You have updated the title."
			},

			findIndexOfTheMovie ()
			{
				let rankOfTheMovie = this.$route.params.rank

				let movie_list = this.$store.state.movie_list

				for (var i = 0; i < movie_list.length; i++)
				{
					if ( movie_list[i]
						.rank == rankOfTheMovie )
					{
						return i;
					}
				}
			}
		}

	}

</script>

<style>
	
.title-input-file
{
	border-radius: 0px;
	padding: 4px 10px;
	border: 0px solid #fff;
	border-bottom: 2px solid #aaa;
	outline: none;
	transition: 0.2s;
}

.title-input-file:focus
{
	border-bottom: 2px solid blue;
}

</style>