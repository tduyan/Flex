

const FetchAPI = {

    fetchPopularMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=3042596271957c60477b546b2ecf2677&language=en-US&sort_by=popularity.desc',
    fetchPopularSeries: 'https://api.themoviedb.org/3/discover/tv?api_key=3042596271957c60477b546b2ecf2677&language=en-US&sort_by=popularity.desc',
    fetchUpcomingMovies:  'https://api.themoviedb.org/3/movie/upcoming?api_key=3042596271957c60477b546b2ecf2677&language=en-US',
    fetchTopRatedShows:  'https://api.themoviedb.org/3/tv/top_rated?api_key=3042596271957c60477b546b2ecf2677&language=en-US&'
} 

export default FetchAPI