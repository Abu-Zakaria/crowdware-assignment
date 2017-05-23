import movie_list from '@/storage/imdb-movie-list.js'

describe("storage/imdb-movie-list.js", () => {
	it ("list should contain 100 movies", () => {
		let length = movie_list.length;

		expect(length).to.equal(100)
	})

	it("list starts with the best movie", () => {
		let rank = movie_list[0].rank

		expect(rank).to.equal('1')
	})

	it("finishes with the 100th movie", () => {
		let last_movie = movie_list[99].rank

		expect(last_movie).to.equal('100')
	})

	it("every movie has title", () => {
		let title_does_not_exists;

		for (var i = 0; i < movie_list.length; i++) {

			movie_list[i]

			if ( !movie_list[i].title )
			{
				title_does_not_exists = true
				break
			}

			title_does_not_exists = false
		}

		expect(title_does_not_exists).to.equal(false)

	})
})