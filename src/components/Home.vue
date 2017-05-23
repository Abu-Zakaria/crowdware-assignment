<template>
	<div>
		<div class="homepage-wrapper">
			<div class="search-form-wrapper">
				<div class="search-form">
					<input type="text"
						class="search-text-field"
						v-model="search_input"
						@keyup="search (search_input)"
						placeholder="Search....">
				</div>
			</div>

			<div class="create-new-wrapper">
				<div class="create-new-form">
					<form @submit.prevent="onCreate ()">
						<label>Rank</label>
						<input type="number"
							min="0" 
							v-model="create_rank">

						<label>Title</label>
						<input type="text" v-model="create_title">

						<button>
							Create
						</button>
					</form>
					<p>
						{{ feedback }}
					</p>
				</div>
			</div>

			<div class="list-wrapper">
				<div class="list">
					<li v-for="movie in list"
						v-if="!search_input.length">
						<span class="movie-title">
							{{ movie.title }}
						</span>
						<span class="float-right actions">
							<router-link :to="'/view/' +
								movie.rank"
								class="show-icon">
								<i class="fa fa-eye"></i>
							</router-link>

							<router-link :to="'/update/' +
								movie.rank"
								class="update-icon">
								<i class="fa fa-pencil"></i>
							</router-link>

							<router-link :to="'/delete/' +
								movie.rank"
								class="delete-icon">
								<i class="fa fa-trash"></i>
							</router-link>
						</span>
					</li>
					<li v-for="movie in results"
						v-if="search_input.length">
						{{ movie.title }}

						<span class="float-right actions">
							<router-link :to="'/view/' +
								movie.rank"
								class="show-icon">
								<i class="fa fa-eye"></i>
							</router-link>

							<router-link :to="'/update/' +
								movie.rank"
								class="update-icon">
								<i class="fa fa-pencil"></i>
							</router-link>

							<router-link :to="'/delete/' +
								movie.rank"
								class="delete-icon">
								<i class="fa fa-trash"></i>
							</router-link>
						</span>
					</li>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name : "Home",

		data()
		{
			return {
				search_input : '',
				list : [],
				results : [],
				feedback : ''
			}
		},

		methods :
		{
			onCreate ()
			{
				let ExceptionFound = false

				this.feedback = ''

				for (var i = 0; i < this.list.length; i++)
				{
					let movie_title = this.list[i].title

					if ( this.list[i].rank == this.create_rank ||
						movie_title == this.create_title.trim() )
					{
						ExceptionFound = true
						break
					}
				}

				if ( ExceptionFound )
				{
					this.feedback = "There is already a movie with that title or rank number!"

					return false
				}

				this.$store.commit('create', {
					rank: this.create_rank,
					title: this.create_title,
				})

				this.feedback = "You have created a new movie in the list!"

				this.create_rank = ''
				this.create_title = ''
			},

			search (keyword)
			{
				// let keyword = this.search_input
				this.results = this.searchThroughTheList (keyword)
			},

			searchThroughTheList (keyword)
			{
				let results = []

				this.list.forEach(movie => {

					let regexp_string = 
						new RegExp(keyword, 'ig')

					if ( regexp_string.test(movie.title) )
					{
						results.push(movie)
					}
				})

				return results
			}
		},

		mounted()
		{
			this.list = this.$store.state.movie_list

			window.scrollTo(0, 0)
		}

	}

</script>

<style type="text/css">
	
.list
{
	list-style-type: none;
}

.search-form-wrapper
{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
}

.search-text-field
{
	border-radius: 0px;
	padding: 4px 10px;
	border: 0px solid #fff;
	border-bottom: 2px solid #aaa;
	outline: none;
	transition: 0.2s;
}

.search-text-field:focus
{
	border-bottom: 2px solid blue;
}

.float-right
{
	float: right;
}

.list li
{
	margin: 20px;
}

.list a
{
	color: #888;
}

.list a i
{
	margin-right: 8px;
}

.show-icon i
{
	color: #6a2daf;
}

.update-icon i
{
	color: #229b42;
}

.delete-icon i
{
	color: #e06960
}

.actions a
{
	border: 2px solid #c3c3c3;
	border-radius: 50%;
	margin: 4px;
	padding: 5px 2px 5px 9px;
	transition: 0.3s;
}

.actions a:hover
{
	background: #f4f4f4;
}

.actions a:focus
{
	box-shadow: inset 0px 1px 3px 0px #ccc;
}

.movie-title
{
	width: 20px;
}

.create-new-form
{
	width: 30%;
}

.create-new-form input
{
	width: 100%;
	margin-bottom: 10px;
}

</style>